import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9q04zb5i.css';
import '../../css/l/lj_7yb7ea.css';
import '../../css/w/w01p5vboc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n9q04zb5i"/><path class="lj_7yb7ea"/><path class="w01p5vboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:delivery-truck-clock"} {...others} />);
}

export default Component;
