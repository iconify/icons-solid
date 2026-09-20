import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fss36bbna.css';
import '../../css/w/w3qyplb8m.css';
import '../../css/g/g1oxkbkoa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fss36bbna"/><path class="w3qyplb8m"/><path class="g1oxkbkoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domainmod-light"} {...others} />);
}

export default Component;
