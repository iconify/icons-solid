import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em8kwvu3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="em8kwvu3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:droplet-minus"} {...others} />);
}

export default Component;
