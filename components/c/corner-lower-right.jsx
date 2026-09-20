import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx06-ybtv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yx06-ybtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:corner-lower-right"} {...others} />);
}

export default Component;
