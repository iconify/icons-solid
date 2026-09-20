import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7g6zmbjt.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="x7g6zmbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:2fswiperight"} {...others} />);
}

export default Component;
