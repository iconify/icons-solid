import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l21w7pbid.css';
import '../../css/z/zhe6sbcdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l21w7pbid"/><path class="zhe6sbcdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-autofit-width-filled"} {...others} />);
}

export default Component;
