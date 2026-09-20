import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3uh-pgdy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p3uh-pgdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:archway-solid"} {...others} />);
}

export default Component;
