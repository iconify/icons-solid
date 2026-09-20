import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md0h0dbps.css';
import '../../css/l/loqdhccef.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="md0h0dbps"/><path class="loqdhccef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-constuction"} {...others} />);
}

export default Component;
