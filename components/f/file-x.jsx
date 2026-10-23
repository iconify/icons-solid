import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/t5td6567i.css';
import '../../css/u/ukpwpb_ld.css';
import '../../css/k/k0fv9gfqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="t5td6567i"/><path class="ukpwpb_ld"/><path class="k0fv9gfqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:file-x"} {...others} />);
}

export default Component;
