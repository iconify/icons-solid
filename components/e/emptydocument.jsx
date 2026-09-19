import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aixq4db0w.css';
import '../../css/d/deb9mesxm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aixq4db0w"/><path class="deb9mesxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:emptydocument"} {...others} />);
}

export default Component;
