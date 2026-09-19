import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulra56alq.css';
import '../../css/s/s3yqb5bmb.css';
import '../../css/q/qtquy_brk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ulra56alq"><path class="s3yqb5bmb"/><path class="qtquy_brk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:gatsby"} {...others} />);
}

export default Component;
