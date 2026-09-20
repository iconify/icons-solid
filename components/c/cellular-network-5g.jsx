import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eia0otz9f.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="eia0otz9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cellular-network-5g"} {...others} />);
}

export default Component;
