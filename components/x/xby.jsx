import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g7_n2obnb.css';
import '../../css/k/kzg9x7d_n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="g7_n2obnb"/><path class="kzg9x7d_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xby"} {...others} />);
}

export default Component;
