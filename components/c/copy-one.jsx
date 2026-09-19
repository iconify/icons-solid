import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/g/gy_pqzw6t.css';
import '../../css/t/tm-y6ci7n.css';
import '../../css/c/cv5fzhbbu.css';
import '../../css/j/jri3mq8hx.css';
import '../../css/e/ehufd1sdo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="gy_pqzw6t"/><path class="tm-y6ci7n"/><path class="cv5fzhbbu"/><path class="jri3mq8hx"/><path class="ehufd1sdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:copy-one"} {...others} />);
}

export default Component;
