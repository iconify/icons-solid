import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rak8y7bfa.css';
import '../../css/o/o3-o5nogz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rak8y7bfa"/><path class="o3-o5nogz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:account-logout"} {...others} />);
}

export default Component;
