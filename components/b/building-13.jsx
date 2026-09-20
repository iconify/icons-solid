import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nkhcm6v6w.css';
import '../../css/p/pdxdz28jj.css';
import '../../css/f/fod0vccza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="nkhcm6v6w"/><path class="pdxdz28jj"/><path class="fod0vccza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:building-13"} {...others} />);
}

export default Component;
