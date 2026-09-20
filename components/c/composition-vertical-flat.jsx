import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8v6whbhh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="z8v6whbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:composition-vertical-flat"} {...others} />);
}

export default Component;
