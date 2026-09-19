import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q22zcbcfe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q22zcbcfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:curl-lang"} {...others} />);
}

export default Component;
