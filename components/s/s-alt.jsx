import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sws6u3btr.css';
import '../../css/b/blhityb7b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sws6u3btr"/><path class="blhityb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:s-alt"} {...others} />);
}

export default Component;
