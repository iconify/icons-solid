import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyjrey-ar.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="wyjrey-ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:edit-undo-stroke-12"} {...others} />);
}

export default Component;
