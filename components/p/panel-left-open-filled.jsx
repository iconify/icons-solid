import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjq87kk7o.css';
import '../../css/t/taok2ubed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qjq87kk7o"/><path clip-rule="evenodd" class="taok2ubed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:panel-left-open-filled"} {...others} />);
}

export default Component;
