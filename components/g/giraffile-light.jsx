import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/finqxnb7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="finqxnb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:giraffile-light"} {...others} />);
}

export default Component;
