import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay399x7xk.css';
import '../../css/h/hcnrfbg9j.css';
import '../../css/f/fe6egccun.css';
import '../../css/a/a7402wb8m.css';
import '../../css/z/zo57iac0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ay399x7xk"/><path class="hcnrfbg9j"/><path class="fe6egccun"/><path class="a7402wb8m"/><path class="zo57iac0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-4-bold-duotone"} {...others} />);
}

export default Component;
