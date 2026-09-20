import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bb3g-_4cc.css';
import '../../css/n/n9baun0jc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="bb3g-_4cc"/><path class="n9baun0jc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:card-credit"} {...others} />);
}

export default Component;
