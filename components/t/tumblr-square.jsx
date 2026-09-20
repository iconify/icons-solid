import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-296b9zl.css';
import '../../css/u/u0j55db0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-296b9zl"/><path class="u0j55db0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:tumblr-square"} {...others} />);
}

export default Component;
