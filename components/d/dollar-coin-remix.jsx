import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3-8oul0y.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="h3-8oul0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:dollar-coin-remix"} {...others} />);
}

export default Component;
