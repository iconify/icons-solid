import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr9bynb9b.css';
import '../../css/g/gxyna80vx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hr9bynb9b"/><path class="gxyna80vx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:pin-alt-1-fill"} {...others} />);
}

export default Component;
