import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/venqq4bqz.css';
import '../../css/u/u3u76o33j.css';
import '../../css/a/azko2ujod.css';
import '../../css/i/iflzd_h6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="venqq4bqz"/><path clip-rule="evenodd" class="u3u76o33j"/><path class="azko2ujod"/><path clip-rule="evenodd" class="iflzd_h6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-right-bold"} {...others} />);
}

export default Component;
