import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j51w7z-wj.css';
import '../../css/q/qg43yj1um.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j51w7z-wj"/><path class="qg43yj1um"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:location-arrow-circle-o"} {...others} />);
}

export default Component;
