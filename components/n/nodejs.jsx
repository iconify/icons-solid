import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg3v7v9he.css';
import '../../css/q/qnmhn2udd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yg3v7v9he"/><path class="qnmhn2udd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:nodejs"} {...others} />);
}

export default Component;
