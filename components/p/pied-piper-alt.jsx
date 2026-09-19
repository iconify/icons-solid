import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx8adxb6p.css';

const viewBox = {"width":1984,"height":1792};
const content = `<path class="xx8adxb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:pied-piper-alt"} {...others} />);
}

export default Component;
