import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3djr2b_v.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="r3djr2b_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:less-than-sign-circle-remix"} {...others} />);
}

export default Component;
