import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6e7gbb9f.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ecfmroazw.css';
import '../../css/z/z183tbbqk.css';
import '../../css/h/hjjz9298x.css';
import '../../css/g/gk5kpeb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6e7gbb9f secondary"/><g class="dt0cm9dhy primary"><path class="ecfmroazw"/><path class="z183tbbqk"/><path class="hjjz9298x"/><path class="gk5kpeb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mailbox-duo"} {...others} />);
}

export default Component;
