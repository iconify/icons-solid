import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf26wacpe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x6-qk2bjk.css';
import '../../css/b/biix0ugvx.css';
import '../../css/c/coc26zbtk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary uf26wacpe"/><g class="dt0cm9dhy primary"><path class="x6-qk2bjk"/><path class="biix0ugvx"/><path class="coc26zbtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:paint-roller-duo"} {...others} />);
}

export default Component;
