import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu-nlsb1q.css';
import '../../css/x/xgayqouzf.css';
import '../../css/a/amj8xrx6f.css';
import '../../css/e/e8hrcooaj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zu-nlsb1q"/><path class="xgayqouzf"/><path class="amj8xrx6f"/><path class="e8hrcooaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:watermelon"} {...others} />);
}

export default Component;
