import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ody6ekxva.css';
import '../../css/m/msx52gb2q.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="ody6ekxva"/><path class="msx52gb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:watch-solid"} {...others} />);
}

export default Component;
