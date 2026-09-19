import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ped2ifbwy.css';
import '../../css/n/nppjnzgzv.css';
import '../../css/o/ow9vjabpj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ped2ifbwy"/><rect class="nppjnzgzv"/><rect class="ow9vjabpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:vertical-align-bottom-filled"} {...others} />);
}

export default Component;
