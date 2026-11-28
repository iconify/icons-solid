import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1d9yhbqx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/e/ebgx8jqmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1d9yhbqx secondary"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="ebgx8jqmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-dot-duo"} {...others} />);
}

export default Component;
