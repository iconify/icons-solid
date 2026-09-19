import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htl8_ibad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="htl8_ibad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:shopping-bag-01"} {...others} />);
}

export default Component;
