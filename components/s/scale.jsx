import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtgmf5b6d.css';
import '../../css/x/x4ya1hbwl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qtgmf5b6d"/><path class="x4ya1hbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:scale"} {...others} />);
}

export default Component;
