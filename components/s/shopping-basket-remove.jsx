import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/of6hjdkhf.css';
import '../../css/u/u5pk52rnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="of6hjdkhf"/><path class="u5pk52rnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:shopping-basket-remove"} {...others} />);
}

export default Component;
