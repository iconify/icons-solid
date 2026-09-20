import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0wvtc8gu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o0wvtc8gu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hbo-max-dark"} {...others} />);
}

export default Component;
