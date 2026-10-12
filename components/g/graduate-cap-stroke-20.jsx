import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwf0dbb6b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mwf0dbb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:graduate-cap-stroke-20"} {...others} />);
}

export default Component;
