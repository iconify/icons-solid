import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfq8i7oxl.css';
import '../../css/j/jlm_d_64c.css';
import '../../css/k/kkgs0eber.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gfq8i7oxl wm-shadow"/><path class="jlm_d_64c wm-k"/><path class="kkgs0eber wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:parentheses"} {...others} />);
}

export default Component;
