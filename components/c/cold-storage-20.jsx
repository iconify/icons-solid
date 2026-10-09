import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyvjvhb1l.css';
import '../../css/z/zrqlkvb4c.css';
import '../../css/o/oov7epbkt.css';
import '../../css/h/hh-vtxt5b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zyvjvhb1l"/><path class="zrqlkvb4c"/><path class="oov7epbkt"/><path class="hh-vtxt5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cold-storage-20"} {...others} />);
}

export default Component;
