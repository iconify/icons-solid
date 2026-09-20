import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyu8irogq.css';
import '../../css/w/wy1zwjlfg.css';
import '../../css/u/u5jc2ibbn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xyu8irogq"/><path class="wy1zwjlfg"/><path class="u5jc2ibbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-flag"} {...others} />);
}

export default Component;
