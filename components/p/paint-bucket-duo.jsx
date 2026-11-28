import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxdbbfiis.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i66nlzbsu.css';
import '../../css/c/cai4gqkcy.css';
import '../../css/c/cu1zsc2zh.css';
import '../../css/l/lg3m63ztu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxdbbfiis secondary"/><g class="dt0cm9dhy primary"><path class="i66nlzbsu"/><path class="cai4gqkcy"/><path class="cu1zsc2zh"/><path class="lg3m63ztu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:paint-bucket-duo"} {...others} />);
}

export default Component;
