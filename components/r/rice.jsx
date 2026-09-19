import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/m/myyyvpbch.css';
import '../../css/z/zy6r9tbqu.css';
import '../../css/o/ozlgvzbky.css';
import '../../css/q/qdupd8ior.css';
import '../../css/y/yu1pdbp4f.css';
import '../../css/e/eka60mbfr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="myyyvpbch"/><path class="zy6r9tbqu"/><path class="ozlgvzbky"/><path class="qdupd8ior"/><path class="yu1pdbp4f"/><path class="eka60mbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rice"} {...others} />);
}

export default Component;
