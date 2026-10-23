import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/g1_gbyj9e.css';
import '../../css/i/ihx5pgbrx.css';
import '../../css/a/ak1e8fwvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="g1_gbyj9e"/><path class="ihx5pgbrx"/><path class="ak1e8fwvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:graduation-cap"} {...others} />);
}

export default Component;
