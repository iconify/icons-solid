import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt-zk8blz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qt-zk8blz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mineshaft-cage"} {...others} />);
}

export default Component;
