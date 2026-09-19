import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/obsjfkxrf.css';
import '../../css/f/f9jk31blc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="obsjfkxrf"/><path class="f9jk31blc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:battery-medium"} {...others} />);
}

export default Component;
