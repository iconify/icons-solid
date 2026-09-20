import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v70-wlb8m.css';
import '../../css/p/p2ucjgbkj.css';
import '../../css/p/peoklab8z.css';
import '../../css/c/csxdllvzu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v70-wlb8m"/><path class="p2ucjgbkj"/><path class="peoklab8z"/><path class="csxdllvzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-growth-plant"} {...others} />);
}

export default Component;
