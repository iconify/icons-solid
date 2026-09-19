import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/afxvscc_n.css';
import '../../css/u/uh9c510oi.css';
import '../../css/g/gl1picbrx.css';
import '../../css/f/ffom0-z3a.css';
import '../../css/b/bk4rg4uft.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="afxvscc_n"/><path class="uh9c510oi"/><path class="gl1picbrx"/><path class="ffom0-z3a"/><path class="bk4rg4uft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:plan"} {...others} />);
}

export default Component;
