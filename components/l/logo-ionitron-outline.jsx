import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brmy6cpyy.css';
import '../../css/p/p-6rxcb4t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="brmy6cpyy"/><path class="p-6rxcb4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-ionitron-outline"} {...others} />);
}

export default Component;
