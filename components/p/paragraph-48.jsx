import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdab_2s4t.css';
import '../../css/p/py210wb6u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zdab_2s4t"/><path class="py210wb6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paragraph-48"} {...others} />);
}

export default Component;
