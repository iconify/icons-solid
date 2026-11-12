import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjq4rwesi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jjq4rwesi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dockerizalo-dark"} {...others} />);
}

export default Component;
