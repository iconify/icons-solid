import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/saxe4ccch.css';
import '../../css/v/vi54ztb5j.css';
import '../../css/q/qx4y48btg.css';
import '../../css/h/hk57nrpof.css';
import '../../css/r/r8bjcrbby.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="saxe4ccch"/><path clip-rule="evenodd" class="vi54ztb5j"/><path clip-rule="evenodd" class="qx4y48btg"/><path class="hk57nrpof"/><path class="r8bjcrbby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:trophy"} {...others} />);
}

export default Component;
