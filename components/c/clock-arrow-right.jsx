import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kcuc961yk.css';
import '../../css/k/k6sv8h06y.css';
import '../../css/l/l0n7j5p3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kcuc961yk"/><path class="k6sv8h06y"/><path class="l0n7j5p3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clock-arrow-right"} {...others} />);
}

export default Component;
