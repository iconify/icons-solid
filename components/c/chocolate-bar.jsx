import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jlahyknta.css';
import '../../css/h/ha2d6nbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jlahyknta"/><path class="ha2d6nbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chocolate-bar"} {...others} />);
}

export default Component;
