import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cns_8e9_u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cns_8e9_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:three-bars"} {...others} />);
}

export default Component;
