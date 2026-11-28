import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei0zwbb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ei0zwbb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:podcast-heart"} {...others} />);
}

export default Component;
