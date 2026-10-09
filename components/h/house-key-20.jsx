import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7juawdew.css';
import '../../css/v/v0h2-7bys.css';
import '../../css/c/ctzl9ackg.css';
import '../../css/p/psrlxpb8u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p7juawdew"/><path class="v0h2-7bys"/><path class="ctzl9ackg"/><path class="psrlxpb8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-key-20"} {...others} />);
}

export default Component;
