import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcs6_gbva.css';

const viewBox = {"width":512,"height":448};
const content = `<path class="gcs6_gbva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:credit-card"} {...others} />);
}

export default Component;
