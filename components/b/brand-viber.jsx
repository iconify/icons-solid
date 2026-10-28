import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/za134w8xh.css';
import '../../css/h/hik1tdbek.css';
import '../../css/s/szkh23b-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="za134w8xh"/><path class="hik1tdbek"/><path class="szkh23b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-viber"} {...others} />);
}

export default Component;
