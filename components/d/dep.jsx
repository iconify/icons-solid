import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaslzfbmc.css';
import '../../css/x/x_1t_ybrw.css';
import '../../css/l/lnt4cbcsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qaslzfbmc"/><path clip-rule="evenodd" class="x_1t_ybrw"/><path class="lnt4cbcsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dep"} {...others} />);
}

export default Component;
