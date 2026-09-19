import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-mnt58yd.css';
import '../../css/m/mu5v6jmij.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b-mnt58yd"/><path class="mu5v6jmij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:information-square"} {...others} />);
}

export default Component;
