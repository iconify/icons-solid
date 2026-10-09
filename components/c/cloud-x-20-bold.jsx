import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z55jyj2un.css';
import '../../css/k/kndjxwbkd.css';
import '../../css/p/pmi225hre.css';
import '../../css/m/mrzlzgbxo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z55jyj2un"/><path class="kndjxwbkd"/><path class="pmi225hre"/><path class="mrzlzgbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-x-20-bold"} {...others} />);
}

export default Component;
