import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx1jmtbvx.css';
import '../../css/g/gb3l1qqio.css';
import '../../css/y/yckuhjbgg.css';
import '../../css/z/zgo1v5hqs.css';
import '../../css/u/uxohpkbpo.css';
import '../../css/m/mbj_webcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lx1jmtbvx"/><path class="gb3l1qqio"/><path class="yckuhjbgg"/><path class="zgo1v5hqs"/><path class="uxohpkbpo"/><path class="mbj_webcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xi"} {...others} />);
}

export default Component;
