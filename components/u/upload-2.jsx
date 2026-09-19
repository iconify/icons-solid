import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc2-ddicz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nc2-ddicz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:upload-2"} {...others} />);
}

export default Component;
