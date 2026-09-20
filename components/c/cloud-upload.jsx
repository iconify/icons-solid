import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fheo4objp.css';
import '../../css/p/p8bzevp-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fheo4objp"/><path class="p8bzevp-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:cloud-upload"} {...others} />);
}

export default Component;
