import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzbjndnww.css';
import '../../css/c/cto4ue-da.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pzbjndnww"/><path clip-rule="evenodd" class="cto4ue-da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:font-16"} {...others} />);
}

export default Component;
