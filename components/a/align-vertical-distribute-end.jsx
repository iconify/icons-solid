import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f1zbalb1o.css';
import '../../css/g/ghiiec2vs.css';
import '../../css/k/k8i5ehayw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="f1zbalb1o"/><rect class="ghiiec2vs"/><path class="k8i5ehayw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-vertical-distribute-end"} {...others} />);
}

export default Component;
