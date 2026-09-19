import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hphbwmrgv.css';

const viewBox = {"width":464,"height":496};
const content = `<path class="hphbwmrgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:broken-link"} {...others} />);
}

export default Component;
