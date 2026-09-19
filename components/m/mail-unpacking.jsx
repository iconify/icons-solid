import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/eogixiblz.css';
import '../../css/h/hzgy6wbai.css';
import '../../css/r/r__g_caqu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="eogixiblz"/><path class="hzgy6wbai"/><path class="r__g_caqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mail-unpacking"} {...others} />);
}

export default Component;
