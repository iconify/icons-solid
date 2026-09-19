import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8ha2hsdr.css';
import '../../css/a/aby3u3bop.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f8ha2hsdr"/><path class="aby3u3bop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:door-open-alt"} {...others} />);
}

export default Component;
