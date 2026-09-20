import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/tsi88lbcp.css';
import '../../css/r/rxg13ybiv.css';
import '../../css/n/no-r5g2os.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="tsi88lbcp"/><path class="rxg13ybiv"/><path class="no-r5g2os"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:navigation-left"} {...others} />);
}

export default Component;
