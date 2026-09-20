import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqi_j-b4x.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="wqi_j-b4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:fork-knife-solid"} {...others} />);
}

export default Component;
