import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/t/tz9-5ubyh.css';
import '../../css/h/h2fe-ksvz.css';
import '../../css/g/g38jmdb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="tz9-5ubyh"/><path class="h2fe-ksvz"/><circle class="g38jmdb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chart-pin-light"} {...others} />);
}

export default Component;
