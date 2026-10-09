import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0wuxkb3p.css';
import '../../css/s/s-8c-vb5u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d0wuxkb3p"/><path class="s-8c-vb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:picnic-48-bold"} {...others} />);
}

export default Component;
