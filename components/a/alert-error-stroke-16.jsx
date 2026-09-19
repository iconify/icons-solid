import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hde0f9hoe.css';
import '../../css/j/jkfvpr2gm.css';
import '../../css/p/p9hlq3xpn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><circle class="hde0f9hoe"/><path class="jkfvpr2gm"/></g><circle class="p9hlq3xpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:alert-error-stroke-16"} {...others} />);
}

export default Component;
