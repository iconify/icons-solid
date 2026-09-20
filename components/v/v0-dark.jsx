import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnr7_ug-t.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="hnr7_ug-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:v0-dark"} {...others} />);
}

export default Component;
