import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc3j3dfwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc3j3dfwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:book-check"} {...others} />);
}

export default Component;
