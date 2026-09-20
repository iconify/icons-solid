import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnvucacag.css';
import '../../css/b/bh4frdbmf.css';
import '../../css/e/evzbml2ma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nnvucacag"/><path clip-rule="evenodd" class="bh4frdbmf"/><path class="evzbml2ma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:condicioner-outline"} {...others} />);
}

export default Component;
