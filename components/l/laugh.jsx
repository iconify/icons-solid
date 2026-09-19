import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm_qsybka.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/d/dwtkkyb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tm_qsybka"/><path class="bwibdw4bb"/><path class="dwtkkyb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:laugh"} {...others} />);
}

export default Component;
