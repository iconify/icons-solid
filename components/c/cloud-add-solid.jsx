import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv-o7vb2b.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="lv-o7vb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:cloud-add-solid"} {...others} />);
}

export default Component;
