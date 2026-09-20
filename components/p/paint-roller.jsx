import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ar5ayubfo.css';
import '../../css/y/y_ddozifd.css';
import '../../css/d/dpk6_3b7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="ar5ayubfo"/><rect class="y_ddozifd"/><path class="dpk6_3b7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:paint-roller"} {...others} />);
}

export default Component;
