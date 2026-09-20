import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywefrh12i.css';
import '../../css/x/xix09wbue.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ywefrh12i"/><path class="xix09wbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-touch-id-smartphone"} {...others} />);
}

export default Component;
