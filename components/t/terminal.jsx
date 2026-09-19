import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_n_tmbyb.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="l_n_tmbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:terminal"} {...others} />);
}

export default Component;
