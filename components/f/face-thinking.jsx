import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcye7x86p.css';
import '../../css/x/xwx0momul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hcye7x86p"/><path class="xwx0momul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:face-thinking"} {...others} />);
}

export default Component;
