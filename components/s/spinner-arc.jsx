import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nil9-lhla.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nil9-lhla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:spinner-arc"} {...others} />);
}

export default Component;
