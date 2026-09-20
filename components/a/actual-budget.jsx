import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzhztek1e.css';
import '../../css/a/a1lsv6bmw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gzhztek1e"/><path class="a1lsv6bmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:actual-budget"} {...others} />);
}

export default Component;
