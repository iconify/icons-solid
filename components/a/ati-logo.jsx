import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyk-28_6e.css';
import '../../css/v/v04tsihaj.css';
import '../../css/e/e9wu31bpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hyk-28_6e"/><path class="v04tsihaj"/><path class="e9wu31bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:ati-logo"} {...others} />);
}

export default Component;
