import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxo88edev.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cxo88edev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:audio-description-solid"} {...others} />);
}

export default Component;
