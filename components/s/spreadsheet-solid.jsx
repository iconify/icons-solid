import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfq8lxbqj.css';
import '../../css/k/k24wn5bei.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hfq8lxbqj"/><path clip-rule="evenodd" class="k24wn5bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:spreadsheet-solid"} {...others} />);
}

export default Component;
