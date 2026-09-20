import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo1bv_b1p.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="oo1bv_b1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:suitcase-11"} {...others} />);
}

export default Component;
