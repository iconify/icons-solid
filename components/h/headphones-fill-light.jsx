import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tv4g0ebdr.css';
import '../../css/d/doxjibqjc.css';
import '../../css/x/x-fkqvbof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><rect class="tv4g0ebdr"/><rect class="doxjibqjc"/><path class="x-fkqvbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:headphones-fill-light"} {...others} />);
}

export default Component;
