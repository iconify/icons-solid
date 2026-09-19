import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/s3--xqbfi.css';
import '../../css/m/m523p2l3w.css';
import '../../css/o/ocbtnl2hf.css';
import '../../css/j/j2sqa-b2x.css';
import '../../css/t/tjlvrohtz.css';
import '../../css/f/f9x76rbft.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><ellipse class="s3--xqbfi"/><path class="m523p2l3w"/><path class="ocbtnl2hf"/><path class="j2sqa-b2x"/><path class="tjlvrohtz"/><path class="f9x76rbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tree-one"} {...others} />);
}

export default Component;
