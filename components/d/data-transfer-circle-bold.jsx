import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rob-vnojp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rob-vnojp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:data-transfer-circle-bold"} {...others} />);
}

export default Component;
