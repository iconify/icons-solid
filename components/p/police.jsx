import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/c56_ubc-u.css';
import '../../css/c/canlghato.css';
import '../../css/f/fgd8_4b4i.css';
import '../../css/a/ajopsf-dq.css';
import '../../css/l/l6neakbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="c56_ubc-u"/><path class="canlghato"/><path class="fgd8_4b4i"/><path class="ajopsf-dq"/><path class="l6neakbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:police"} {...others} />);
}

export default Component;
