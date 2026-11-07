import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud3fqxmls.css';
import '../../css/b/bdo_xv7jy.css';
import '../../css/q/q0ro-4hck.css';
import '../../css/c/cr29i4b8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ud3fqxmls"/><path class="bdo_xv7jy"/><path class="q0ro-4hck"/><path class="cr29i4b8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-rain-bold"} {...others} />);
}

export default Component;
