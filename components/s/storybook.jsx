import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh6d2wb4r.css';
import '../../css/a/aqx98_b2v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yh6d2wb4r"/><path class="aqx98_b2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:storybook"} {...others} />);
}

export default Component;
