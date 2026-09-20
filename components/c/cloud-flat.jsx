import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw_skj6xc.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="cw_skj6xc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cloud-flat"} {...others} />);
}

export default Component;
