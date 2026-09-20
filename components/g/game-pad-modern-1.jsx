import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z96yl-b9i.css';
import '../../css/a/ad7wyubda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z96yl-b9i"/><path clip-rule="evenodd" class="ad7wyubda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:game-pad-modern-1"} {...others} />);
}

export default Component;
