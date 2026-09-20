import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x_wywf9me.css';
import '../../css/p/pyzgxpkzp.css';
import '../../css/n/n7e0l3bmv.css';
import '../../css/a/a0qim0bok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x_wywf9me"/><path class="pyzgxpkzp"/><path class="n7e0l3bmv"/><path class="a0qim0bok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:sd-card-sync"} {...others} />);
}

export default Component;
