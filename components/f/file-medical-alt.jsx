import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if8ou1ogq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="if8ou1ogq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:file-medical-alt"} {...others} />);
}

export default Component;
