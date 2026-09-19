import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qtp682b4j.css';
import '../../css/m/m7qhx_ojk.css';
import '../../css/c/cql1pwtbp.css';
import '../../css/g/gnr8u8brg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qtp682b4j"/><path class="m7qhx_ojk"/><circle class="cql1pwtbp"/><path class="gnr8u8brg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sleeping"} {...others} />);
}

export default Component;
