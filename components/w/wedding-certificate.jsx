import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/gga-xta3h.css';
import '../../css/s/s25p_db7h.css';
import '../../css/o/oo5fptpyv.css';
import '../../css/f/fzqeczt0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="gga-xta3h"/><path class="s25p_db7h"/><path class="oo5fptpyv"/><path class="fzqeczt0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:wedding-certificate"} {...others} />);
}

export default Component;
