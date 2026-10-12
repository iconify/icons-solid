import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxm-7vagy.css';
import '../../css/r/r3cn_9bmy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lxm-7vagy"/><path class="r3cn_9bmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:basket-plus-fill-20"} {...others} />);
}

export default Component;
