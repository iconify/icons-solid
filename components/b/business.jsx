import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic049nbdu.css';
import '../../css/u/ulq1acb8t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ic049nbdu"/><path class="ulq1acb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:business"} {...others} />);
}

export default Component;
