import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1rdl2wrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n1rdl2wrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:indie-hackers"} {...others} />);
}

export default Component;
