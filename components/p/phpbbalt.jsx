import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-kpn1b3z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="a-kpn1b3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:phpbbalt"} {...others} />);
}

export default Component;
