import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1p169y7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a1p169y7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:lightning-bolt-outline-expressive"} {...others} />);
}

export default Component;
