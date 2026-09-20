import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awm0jpb0n.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="awm0jpb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:video-close-captioning-remix"} {...others} />);
}

export default Component;
