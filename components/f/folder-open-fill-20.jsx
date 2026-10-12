import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8_2a_bwb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b8_2a_bwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:folder-open-fill-20"} {...others} />);
}

export default Component;
