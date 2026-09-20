import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk5s5sbxi.css';
import '../../css/e/ecj_qnblt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hk5s5sbxi"/><path class="ecj_qnblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:copilot-light"} {...others} />);
}

export default Component;
