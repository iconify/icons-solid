import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/umtbi0b_l.css';
import '../../css/k/k153stbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="umtbi0b_l"/><path class="k153stbgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-amie"} {...others} />);
}

export default Component;
