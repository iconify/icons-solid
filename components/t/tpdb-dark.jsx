import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isf22b0cc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="isf22b0cc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tpdb-dark"} {...others} />);
}

export default Component;
