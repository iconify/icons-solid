import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/xj3srebta.css';
import '../../css/m/molrqu-4w.css';
import '../../css/a/am_cr08zz.css';
import '../../css/h/hwx6xebuu.css';
import '../../css/w/w2tjk_twr.css';
import '../../css/u/up9kw1bfd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="xj3srebta"/><path class="molrqu-4w"/><path class="am_cr08zz"/><path class="hwx6xebuu"/><path class="w2tjk_twr"/><path class="up9kw1bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mail-package"} {...others} />);
}

export default Component;
