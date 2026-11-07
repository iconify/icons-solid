import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfo2tsbqu.css';
import '../../css/n/n00rjyr1l.css';
import '../../css/m/m0ls1dbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sfo2tsbqu"/><path class="n00rjyr1l"/><path class="m0ls1dbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloudy-moon-bold"} {...others} />);
}

export default Component;
