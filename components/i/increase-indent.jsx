import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6xkd5abh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="m6xkd5abh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:increase-indent"} {...others} />);
}

export default Component;
