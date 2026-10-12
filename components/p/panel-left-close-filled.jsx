import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjq87kk7o.css';
import '../../css/a/ax9v0n0yy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qjq87kk7o"/><path clip-rule="evenodd" class="ax9v0n0yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:panel-left-close-filled"} {...others} />);
}

export default Component;
