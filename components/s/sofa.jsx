import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdz7ysb4m.css';

const viewBox = {"width":2048,"height":1600};
const content = `<path class="tdz7ysb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:sofa"} {...others} />);
}

export default Component;
