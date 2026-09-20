import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tu5n-0luo.css';
import '../../css/x/xz9lnmbik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tu5n-0luo"/><path class="xz9lnmbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:avocado"} {...others} />);
}

export default Component;
