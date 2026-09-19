import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn6b2sb2b.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="cn6b2sb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:symbol-structure"} {...others} />);
}

export default Component;
