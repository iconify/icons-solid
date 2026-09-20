import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac3vaqbce.css';
import '../../css/r/rf8gf5fko.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ac3vaqbce"/><path class="rf8gf5fko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-anti-virus"} {...others} />);
}

export default Component;
