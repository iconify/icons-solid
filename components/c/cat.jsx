import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fezzo6f2m.css';

const viewBox = {"width":896,"height":1024};
const content = `<path class="fezzo6f2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:cat"} {...others} />);
}

export default Component;
