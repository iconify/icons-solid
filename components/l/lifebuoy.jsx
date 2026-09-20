import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gjzoqze8y.css';
import '../../css/l/lgg2gccbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gjzoqze8y"/><path class="lgg2gccbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lifebuoy"} {...others} />);
}

export default Component;
