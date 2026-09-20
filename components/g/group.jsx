import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btm1bkawd.css';
import '../../css/x/x-53_-bbr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="btm1bkawd"/><path class="x-53_-bbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:group"} {...others} />);
}

export default Component;
