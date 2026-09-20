import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mm5885bje.css';
import '../../css/q/q0rt4bciw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mm5885bje"/><path class="q0rt4bciw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:yoga"} {...others} />);
}

export default Component;
