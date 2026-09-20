import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pqgqa68im.css';
import '../../css/n/nzakh6zzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="pqgqa68im"/><path class="nzakh6zzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:dices"} {...others} />);
}

export default Component;
