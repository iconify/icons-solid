import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fffsaibbs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o49n02bnz.css';
import '../../css/a/agi7abb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fffsaibbs secondary"/><g class="dt0cm9dhy primary"><path class="o49n02bnz"/><path class="agi7abb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layers-2-duo"} {...others} />);
}

export default Component;
