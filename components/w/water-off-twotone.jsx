import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-r6uf.css';
import '../../css/c/c5xdmn.css';
import '../../css/o/of3gku.css';
import '../../css/o/oxx-om.css';
import '../../css/v/vn2kai.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGFiICpdOk"><path class="r-r6uf"/><path class="c5xdmn of3gku"/><path class="c5xdmn oxx-om vn2kai"/></mask></defs><path mask="url(#SVGFiICpdOk)" class="botfzx"/><path class="c5xdmn gd_4-q vn2kai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:water-off-twotone"} {...others} />);
}

export default Component;
