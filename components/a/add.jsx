import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d47xi2b9o.css';
import '../../css/i/i0hgwgo2s.css';
import '../../css/q/qyzpgohqr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d47xi2b9o"/><path class="i0hgwgo2s"/><path class="qyzpgohqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:add"} {...others} />);
}

export default Component;
