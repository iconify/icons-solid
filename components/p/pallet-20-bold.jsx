import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d26h8nnid.css';
import '../../css/p/py89-ib0d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d26h8nnid"/><path class="py89-ib0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pallet-20-bold"} {...others} />);
}

export default Component;
