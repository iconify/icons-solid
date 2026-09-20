import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j3b9f4yng.css';
import '../../css/n/npzbi206w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j3b9f4yng"/><circle class="npzbi206w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cupcake"} {...others} />);
}

export default Component;
