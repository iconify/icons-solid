import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5rhi4beg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="a5rhi4beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:split-vertical"} {...others} />);
}

export default Component;
