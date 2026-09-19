import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruhl7hcfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ruhl7hcfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:phone-off"} {...others} />);
}

export default Component;
