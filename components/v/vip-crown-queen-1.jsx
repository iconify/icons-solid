import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i5zfcs_ls.css';
import '../../css/p/po5-ctbfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i5zfcs_ls"/><path class="po5-ctbfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:vip-crown-queen-1"} {...others} />);
}

export default Component;
