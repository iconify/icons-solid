import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1zk_dbup.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t1zk_dbup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:slider-stroke-20"} {...others} />);
}

export default Component;
