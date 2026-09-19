import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvgc2mbbg.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="uvgc2mbbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:arrow-counterclockwise-circle-fill"} {...others} />);
}

export default Component;
