import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu14mdo9u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yu14mdo9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:upload-4"} {...others} />);
}

export default Component;
