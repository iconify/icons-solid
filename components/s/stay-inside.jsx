import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io1ow38wk.css';
import '../../css/g/g21o-jbgm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="io1ow38wk"/><path class="g21o-jbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:stay-inside"} {...others} />);
}

export default Component;
