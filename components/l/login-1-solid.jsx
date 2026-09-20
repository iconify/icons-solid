import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x07qj48-r.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="x07qj48-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:login-1-solid"} {...others} />);
}

export default Component;
