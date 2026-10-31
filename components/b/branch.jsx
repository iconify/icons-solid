import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lzosqn81c.css';
import '../../css/m/mmak3gb0y.css';
import '../../css/z/zg-rdfbnh.css';
import '../../css/c/c_3-amphq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="lzosqn81c"/><circle class="mmak3gb0y"/><circle class="zg-rdfbnh"/><path class="c_3-amphq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:branch"} {...others} />);
}

export default Component;
