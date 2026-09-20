import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l228-e65r.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="l228-e65r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:hourglass-remix"} {...others} />);
}

export default Component;
