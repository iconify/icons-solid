import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvgr2srcy.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="pvgr2srcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:toilet-sign-man-woman-2-flat"} {...others} />);
}

export default Component;
