import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j29moabpi.css';
import '../../css/e/etvlrmq6u.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="j29moabpi"/><path class="etvlrmq6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dumbassets"} {...others} />);
}

export default Component;
