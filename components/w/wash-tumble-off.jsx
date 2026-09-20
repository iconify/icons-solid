import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pug-vqbqt.css';
import '../../css/v/vnh_nbb7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pug-vqbqt"/><path class="vnh_nbb7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-tumble-off"} {...others} />);
}

export default Component;
