import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfbx2hb7c.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="bfbx2hb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-top-move-up-arrow-arrows"} {...others} />);
}

export default Component;
