import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9f10nboz.css';
import '../../css/y/y3cighb0v.css';
import '../../css/w/weadfjyaa.css';
import '../../css/m/mvl3ubbuj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="c9f10nboz"/><path class="y3cighb0v"/><path class="weadfjyaa"/><path class="mvl3ubbuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mount-fuji"} {...others} />);
}

export default Component;
