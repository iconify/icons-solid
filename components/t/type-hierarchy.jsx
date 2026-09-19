import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af1jcmpkg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="af1jcmpkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:type-hierarchy"} {...others} />);
}

export default Component;
