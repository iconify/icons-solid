import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2z65lbzr.css';
import '../../css/o/osntdmcqu.css';
import '../../css/t/tqt27vbot.css';
import '../../css/l/lombb6b-f.css';
import '../../css/g/gzd5fp8cq.css';
import '../../css/z/z8conoi1g.css';
import '../../css/s/sc-452bmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s2z65lbzr"/><path class="osntdmcqu"/><path class="tqt27vbot"/><path class="lombb6b-f"/><path class="gzd5fp8cq"/><path class="z8conoi1g"/><path class="sc-452bmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:vegetables-beet-1"} {...others} />);
}

export default Component;
