import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqcjrr7fx.css';
import '../../css/q/q77si10cw.css';
import '../../css/v/vco9mxxbz.css';
import '../../css/c/c721j6aor.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqcjrr7fx"/><path class="q77si10cw"/><path class="vco9mxxbz"/><path class="c721j6aor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:polypad"} {...others} />);
}

export default Component;
