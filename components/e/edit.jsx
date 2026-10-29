import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m14ig-bxz.css';
import '../../css/q/q52rgmb9a.css';
import '../../css/n/n792s6bgk.css';
import '../../css/e/e0na4obrw.css';
import '../../css/p/p9xa7qdil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m14ig-bxz"/><path class="q52rgmb9a"/><path class="n792s6bgk"/><path class="e0na4obrw"/><path class="p9xa7qdil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:edit"} {...others} />);
}

export default Component;
