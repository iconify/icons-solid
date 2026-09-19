import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/t/tqw8k0f0r.css';
import '../../css/u/un_5co41a.css';
import '../../css/n/n0_i2bckx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="tqw8k0f0r"/><path class="un_5co41a"/><circle class="n0_i2bckx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cd"} {...others} />);
}

export default Component;
