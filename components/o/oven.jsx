import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7a4v0blj.css';
import '../../css/q/qxy5ofb9u.css';
import '../../css/x/xb9-2_4uz.css';
import '../../css/p/pkxzmlbgt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="v7a4v0blj"/><rect class="qxy5ofb9u"/><circle class="xb9-2_4uz"/><path class="pkxzmlbgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:oven"} {...others} />);
}

export default Component;
