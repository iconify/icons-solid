import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h5jjrmb9v.css';
import '../../css/w/wkvsy0uyb.css';
import '../../css/z/zk1ivsbbj.css';
import '../../css/g/goe5d4bmr.css';
import '../../css/e/edzp0ybfv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="h5jjrmb9v"/><path class="wkvsy0uyb"/><circle class="zk1ivsbbj"/><circle class="goe5d4bmr"/><path class="edzp0ybfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:type-drive"} {...others} />);
}

export default Component;
