import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b3o8babri.css';
import '../../css/t/tn__odbjy.css';
import '../../css/f/faudyac8g.css';
import '../../css/n/n3a1avn0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b3o8babri"/><path class="tn__odbjy"/><path class="faudyac8g"/><path class="n3a1avn0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:yarn"} {...others} />);
}

export default Component;
