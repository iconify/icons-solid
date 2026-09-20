import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdn-nablh.css';
import '../../css/l/l4fpo9b9z.css';
import '../../css/z/z217erwyh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zdn-nablh"/><path class="l4fpo9b9z"/><path class="z217erwyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-eslint-open"} {...others} />);
}

export default Component;
