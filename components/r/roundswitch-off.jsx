import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpdberbzo.css';

const viewBox = {"width":256,"height":256};
const content = `<path clip-rule="evenodd" class="kpdberbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:roundswitch-off"} {...others} />);
}

export default Component;
