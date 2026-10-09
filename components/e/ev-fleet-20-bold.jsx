import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppqe_vbbp.css';
import '../../css/n/n882cmbjh.css';
import '../../css/b/bnkapgrzq.css';
import '../../css/c/cye3j4bfw.css';
import '../../css/p/py33n5ppk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ppqe_vbbp"/><path class="n882cmbjh"/><path class="bnkapgrzq"/><path class="cye3j4bfw"/><path class="py33n5ppk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-fleet-20-bold"} {...others} />);
}

export default Component;
