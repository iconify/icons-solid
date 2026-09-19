import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e49olqbuq.css';
import '../../css/m/m3ouxln2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e49olqbuq"/><path clip-rule="evenodd" class="m3ouxln2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:adobe-experince-design-solid"} {...others} />);
}

export default Component;
