import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d17mx3bfs.css';
import '../../css/z/zr5giubst.css';
import '../../css/z/z01z8_btg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d17mx3bfs"/><path class="zr5giubst"/><path class="z01z8_btg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:type-20"} {...others} />);
}

export default Component;
