import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tokqv9rxj.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="tokqv9rxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:pie-chart-remix"} {...others} />);
}

export default Component;
