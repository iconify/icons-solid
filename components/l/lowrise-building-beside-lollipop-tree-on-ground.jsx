import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt6cbni-w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qt6cbni-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:lowrise-building-beside-lollipop-tree-on-ground"} {...others} />);
}

export default Component;
