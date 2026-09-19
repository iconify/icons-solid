import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp_i_kw1r.css';

const viewBox = {"width":1024,"height":640};
const content = `<path class="wp_i_kw1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:miui"} {...others} />);
}

export default Component;
