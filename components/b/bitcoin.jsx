import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cisxu6win.css';
import '../../css/j/jub3nhbzk.css';
import '../../css/m/mx3d42bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cisxu6win"/><path class="jub3nhbzk"/><path class="mx3d42bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:bitcoin"} {...others} />);
}

export default Component;
