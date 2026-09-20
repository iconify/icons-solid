import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqc085xkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kqc085xkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:googledisplayandvideo360"} {...others} />);
}

export default Component;
