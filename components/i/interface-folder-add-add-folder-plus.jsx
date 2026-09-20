import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4b2zt-qo.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="r4b2zt-qo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-folder-add-add-folder-plus"} {...others} />);
}

export default Component;
