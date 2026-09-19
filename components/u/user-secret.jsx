import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynzxo5bdj.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="ynzxo5bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:user-secret"} {...others} />);
}

export default Component;
