import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu5chmb3k.css';
import '../../css/s/s4xleyb5w.css';
import '../../css/l/l1pj3bg-y.css';

const viewBox = {"width":128,"height":128};
const content = `<rect class="wu5chmb3k"/><path class="s4xleyb5w"/><path class="l1pj3bg-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vuestorefront"} {...others} />);
}

export default Component;
