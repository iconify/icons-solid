import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wzt949h1h.css';
import '../../css/f/fmmkm6nqf.css';
import '../../css/x/x8p-t_bwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wzt949h1h"/><path class="fmmkm6nqf"/><path class="x8p-t_bwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:asset"} {...others} />);
}

export default Component;
