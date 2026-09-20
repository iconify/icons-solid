import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8q7hs45s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8q7hs45s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:times-circle"} {...others} />);
}

export default Component;
