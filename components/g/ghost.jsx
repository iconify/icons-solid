import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/aow0tbtri.css';
import '../../css/b/b-oy3bbci.css';
import '../../css/e/evke8cc5m.css';
import '../../css/x/xruz2cblj.css';
import '../../css/b/b_m7pqbiv.css';
import '../../css/o/o13nptb0a.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="aow0tbtri wm-shadow"/><path class="b-oy3bbci"/><path class="evke8cc5m"/><path class="xruz2cblj"/><path class="b_m7pqbiv wm-shine"/><path class="o13nptb0a wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:ghost"} {...others} />);
}

export default Component;
