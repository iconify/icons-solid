import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2e8a6bbt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u2e8a6bbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:autocaliweb-light"} {...others} />);
}

export default Component;
