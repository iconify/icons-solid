import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gd5ygyb4r.css';
import '../../css/h/ht_kdnlyp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gd5ygyb4r"/><path class="ht_kdnlyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:scale-duocolor-round"} {...others} />);
}

export default Component;
