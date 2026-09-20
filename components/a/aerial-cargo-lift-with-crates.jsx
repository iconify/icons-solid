import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew34l9b1e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ew34l9b1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:aerial-cargo-lift-with-crates"} {...others} />);
}

export default Component;
