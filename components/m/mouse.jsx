import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qcuhu5v7u.css';
import '../../css/v/vrriemp4c.css';
import '../../css/a/aj4h4kzdh.css';
import '../../css/u/uurhudb8k.css';
import '../../css/o/o0kzz7bfp.css';
import '../../css/l/lnqg4qybz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qcuhu5v7u wm-shadow"/><path class="vrriemp4c"/><path class="aj4h4kzdh"/><path class="uurhudb8k"/><path class="o0kzz7bfp wm-shine"/><path class="lnqg4qybz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mouse"} {...others} />);
}

export default Component;
