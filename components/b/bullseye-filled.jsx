import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iyx8dpb5p.css';
import '../../css/o/o49gaohmw.css';
import '../../css/q/qrxx6excg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="iyx8dpb5p"/><path class="o49gaohmw"/><path class="qrxx6excg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bullseye-filled"} {...others} />);
}

export default Component;
