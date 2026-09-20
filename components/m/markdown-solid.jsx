import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_7u7ibpd.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="u_7u7ibpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:markdown-solid"} {...others} />);
}

export default Component;
