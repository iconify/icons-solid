import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3k1rzixx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o3k1rzixx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:npr-dark"} {...others} />);
}

export default Component;
