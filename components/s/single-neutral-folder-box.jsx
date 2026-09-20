import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fr1i81blz.css';
import '../../css/r/rxd12t4co.css';
import '../../css/r/rcha6sbks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fr1i81blz"/><path class="rxd12t4co"/><path class="rcha6sbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-neutral-folder-box"} {...others} />);
}

export default Component;
