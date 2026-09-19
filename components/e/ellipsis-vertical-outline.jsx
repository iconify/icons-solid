import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5w600x0k.css';
import '../../css/p/pl69o0bph.css';
import '../../css/b/bemq7eb7t.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="a5w600x0k"/><circle class="pl69o0bph"/><circle class="bemq7eb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:ellipsis-vertical-outline"} {...others} />);
}

export default Component;
