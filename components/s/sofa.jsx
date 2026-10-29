import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/e0oxnxbwy.css';
import '../../css/a/a83_1zbum.css';
import '../../css/i/iuvo55bhn.css';
import '../../css/m/m4m4e9bsl.css';
import '../../css/x/x15eq8mmu.css';
import '../../css/p/p9pzl-_ux.css';
import '../../css/d/dsuspebxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="e0oxnxbwy wm-shadow"/><path class="a83_1zbum"/><path class="iuvo55bhn"/><path class="m4m4e9bsl"/><path class="x15eq8mmu"/><path class="p9pzl-_ux wm-shine"/><path class="dsuspebxf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sofa"} {...others} />);
}

export default Component;
