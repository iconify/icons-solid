import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cp-4pwl9w.css';
import '../../css/h/hm7utob4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cp-4pwl9w"/><path class="hm7utob4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pick"} {...others} />);
}

export default Component;
