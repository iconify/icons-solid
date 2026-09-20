import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/geode8baf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="geode8baf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:sword"} {...others} />);
}

export default Component;
