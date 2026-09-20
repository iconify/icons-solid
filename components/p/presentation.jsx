import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svz5apblp.css';
import '../../css/s/sk_7s2z0a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="svz5apblp"/><path class="sk_7s2z0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:presentation"} {...others} />);
}

export default Component;
