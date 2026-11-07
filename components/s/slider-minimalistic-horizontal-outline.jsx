import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b15_6um9z.css';
import '../../css/o/o2ipnf05e.css';
import '../../css/o/o53u6goso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b15_6um9z"/><path clip-rule="evenodd" class="o2ipnf05e"/><path class="o53u6goso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-minimalistic-horizontal-outline"} {...others} />);
}

export default Component;
