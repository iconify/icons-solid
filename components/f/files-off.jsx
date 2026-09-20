import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w-ytxabdb.css';
import '../../css/y/y2xm8ib1d.css';
import '../../css/n/nc__2qbke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w-ytxabdb"/><path class="y2xm8ib1d"/><path class="nc__2qbke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:files-off"} {...others} />);
}

export default Component;
