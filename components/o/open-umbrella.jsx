import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1rnzwb0x.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="a1rnzwb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:open-umbrella"} {...others} />);
}

export default Component;
