import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w-ytxabdb.css';
import '../../css/t/tsomvtsbn.css';
import '../../css/v/v004r_iyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w-ytxabdb"/><path class="tsomvtsbn"/><path class="v004r_iyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:files"} {...others} />);
}

export default Component;
