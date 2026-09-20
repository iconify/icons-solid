import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eawg9ib8u.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="eawg9ib8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:cloud-remix"} {...others} />);
}

export default Component;
