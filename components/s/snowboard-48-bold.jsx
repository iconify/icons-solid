import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-75ddbox.css';
import '../../css/g/gva8st1tu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b-75ddbox"/><path class="gva8st1tu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:snowboard-48-bold"} {...others} />);
}

export default Component;
