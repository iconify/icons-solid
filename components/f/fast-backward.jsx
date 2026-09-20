import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqlg3vbfp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iqlg3vbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:fast-backward"} {...others} />);
}

export default Component;
