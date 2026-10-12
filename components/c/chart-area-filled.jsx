import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sozdzcb0a.css';
import '../../css/b/bt5844bwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sozdzcb0a"/><path class="bt5844bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:chart-area-filled"} {...others} />);
}

export default Component;
