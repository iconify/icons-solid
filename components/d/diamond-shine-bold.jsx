import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpsm0gbvv.css';
import '../../css/v/vcqh7-btg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vpsm0gbvv"/><path class="vcqh7-btg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:diamond-shine-bold"} {...others} />);
}

export default Component;
