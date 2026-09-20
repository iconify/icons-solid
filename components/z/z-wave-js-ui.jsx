import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn4gi9b9l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jn4gi9b9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:z-wave-js-ui"} {...others} />);
}

export default Component;
