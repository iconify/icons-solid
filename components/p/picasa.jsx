import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juoeht0qf.css';

const viewBox = {"width":922.943,"height":995.383};
const content = `<path class="juoeht0qf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:picasa"} {...others} />);
}

export default Component;
