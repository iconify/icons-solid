import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wq8i2obqu.css';
import '../../css/o/oqmds-bnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wq8i2obqu"/><path class="oqmds-bnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:phone-vibrate"} {...others} />);
}

export default Component;
