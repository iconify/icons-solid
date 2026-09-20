import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itl92zjdi.css';
import '../../css/z/zuxjskcce.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="itl92zjdi"/><path class="zuxjskcce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:condicioner-2-bold-duotone"} {...others} />);
}

export default Component;
