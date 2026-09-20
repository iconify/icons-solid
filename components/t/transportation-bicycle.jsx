import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfs_du59r.css';
import '../../css/e/e7yzphbkc.css';
import '../../css/x/xcdrlybuo.css';
import '../../css/l/lw14398ol.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qfs_du59r"/><path class="e7yzphbkc"/><path class="xcdrlybuo"/><path class="lw14398ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:transportation-bicycle"} {...others} />);
}

export default Component;
