import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcro2yo8e.css';
import '../../css/a/aju00ib0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tcro2yo8e"/><path class="aju00ib0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sticky-note-plus-filled"} {...others} />);
}

export default Component;
