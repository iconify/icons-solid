import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ger3n3p2o.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ger3n3p2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:camera-loading-solid"} {...others} />);
}

export default Component;
