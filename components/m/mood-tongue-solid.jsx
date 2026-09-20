import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfvpij5gy.css';
import '../../css/j/jdy0pvxyp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dfvpij5gy"/><path clip-rule="evenodd" class="jdy0pvxyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:mood-tongue-solid"} {...others} />);
}

export default Component;
