import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af04s8mfk.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="af04s8mfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:lifeempty"} {...others} />);
}

export default Component;
