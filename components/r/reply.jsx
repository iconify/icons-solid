import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zidurqb5h.css';
import '../../css/q/qxpwn7b3x.css';
import '../../css/b/b9qxjx8ah.css';
import '../../css/m/mnhzo2btb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zidurqb5h"/><path class="qxpwn7b3x wm-shadow"/><path class="b9qxjx8ah"/><path class="mnhzo2btb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:reply"} {...others} />);
}

export default Component;
