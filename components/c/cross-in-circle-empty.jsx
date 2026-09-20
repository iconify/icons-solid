import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z929_bb-t.css';
import '../../css/v/v_12yfv8f.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="z929_bb-t"/><path class="v_12yfv8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:cross-in-circle-empty"} {...others} />);
}

export default Component;
