import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa7ad-bhf.css';
import '../../css/u/uf38hibyw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wa7ad-bhf"/><path class="uf38hibyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:star"} {...others} />);
}

export default Component;
