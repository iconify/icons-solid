import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ecjyiacqx.css';
import '../../css/i/i8r_mr_be.css';
import '../../css/x/x-fkqvbof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><rect class="ecjyiacqx"/><rect class="i8r_mr_be"/><path class="x-fkqvbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:headphones-fill"} {...others} />);
}

export default Component;
