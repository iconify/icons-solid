import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsl9_-rus.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rsl9_-rus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:wrap-arc-upper"} {...others} />);
}

export default Component;
