import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkgs06hvj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/da92j5b5b.css';
import '../../css/v/vym4__tzv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lkgs06hvj secondary"/><g class="dt0cm9dhy primary"><path class="da92j5b5b"/><path class="vym4__tzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-x-duo"} {...others} />);
}

export default Component;
