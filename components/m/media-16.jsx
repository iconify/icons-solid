import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj2y_opli.css';
import '../../css/k/klmk3-lhy.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wj2y_opli"/><path clip-rule="evenodd" class="klmk3-lhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:media-16"} {...others} />);
}

export default Component;
