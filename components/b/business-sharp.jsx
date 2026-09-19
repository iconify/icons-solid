import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4zsyabzx.css';
import '../../css/a/alear2y7j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b4zsyabzx"/><path class="alear2y7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:business-sharp"} {...others} />);
}

export default Component;
