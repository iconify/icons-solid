import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/iu6n-hbzr.css';
import '../../css/p/pag0v9b1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="iu6n-hbzr"/><path class="pag0v9b1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:presentation-2"} {...others} />);
}

export default Component;
