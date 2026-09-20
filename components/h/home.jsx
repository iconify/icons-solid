import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v29gozgod.css';
import '../../css/m/mv0hob2-c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v29gozgod"/><path class="mv0hob2-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:home"} {...others} />);
}

export default Component;
