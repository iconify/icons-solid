import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/som-8wzkt.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="som-8wzkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:oil-can"} {...others} />);
}

export default Component;
