import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bdpqar_3r.css';
import '../../css/j/jdvl1n66l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bdpqar_3r"/><path class="jdvl1n66l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:currency-ethereum"} {...others} />);
}

export default Component;
