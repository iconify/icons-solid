import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvnsb8bex.css';
import '../../css/r/rjfhlsb4c.css';
import '../../css/o/o235c4b9u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dvnsb8bex"/><path class="rjfhlsb4c"/><path class="o235c4b9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:android-os"} {...others} />);
}

export default Component;
