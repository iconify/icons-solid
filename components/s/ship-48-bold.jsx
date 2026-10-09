import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbfaewbaw.css';
import '../../css/s/scknzcbae.css';
import '../../css/d/d672b0b5z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jbfaewbaw"/><path class="scknzcbae"/><path class="d672b0b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ship-48-bold"} {...others} />);
}

export default Component;
