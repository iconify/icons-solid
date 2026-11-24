import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyk60-btd.css';
import '../../css/j/jcbj2xbrn.css';
import '../../css/x/xe8-vm0oy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dyk60-btd"/><path class="jcbj2xbrn"/><path class="xe8-vm0oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-sync-filled"} {...others} />);
}

export default Component;
