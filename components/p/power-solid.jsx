import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5y3vccqw.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="s5y3vccqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:power-solid"} {...others} />);
}

export default Component;
