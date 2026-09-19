import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl3x9zbkz.css';

const viewBox = {"width":448,"height":480};
const content = `<path class="nl3x9zbkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:link"} {...others} />);
}

export default Component;
