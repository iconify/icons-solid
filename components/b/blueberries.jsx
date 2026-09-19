import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tw0-82bnw.css';
import '../../css/y/ydy20f4zg.css';
import '../../css/h/hcztbccpt.css';
import '../../css/x/x64wanbdx.css';
import '../../css/p/ppk9gm36f.css';
import '../../css/p/pox998bug.css';
import '../../css/c/cknn5gbfi.css';
import '../../css/m/myx79is8r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="tw0-82bnw"/><circle class="ydy20f4zg"/><circle class="hcztbccpt"/><path class="x64wanbdx"/><circle class="ppk9gm36f"/><circle class="pox998bug"/><path class="cknn5gbfi"/><circle class="myx79is8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:blueberries"} {...others} />);
}

export default Component;
