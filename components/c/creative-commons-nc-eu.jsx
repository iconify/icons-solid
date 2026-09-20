import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyll4mbwp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fyll4mbwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:creative-commons-nc-eu"} {...others} />);
}

export default Component;
