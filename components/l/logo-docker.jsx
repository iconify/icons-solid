import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lani2cc-y.css';
import '../../css/m/maksvyb5s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lani2cc-y"/><path class="maksvyb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-docker"} {...others} />);
}

export default Component;
