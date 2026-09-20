import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o0hhdtm8h.css';
import '../../css/y/yr2yzgbgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o0hhdtm8h"/><path class="yr2yzgbgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hexagonal-prism-plus"} {...others} />);
}

export default Component;
