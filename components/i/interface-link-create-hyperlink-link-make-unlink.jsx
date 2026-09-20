import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r--l4krnr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="r--l4krnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-link-create-hyperlink-link-make-unlink"} {...others} />);
}

export default Component;
