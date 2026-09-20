import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/r5k3t84wp.css';
import '../../css/e/edj943bew.css';
import '../../css/w/wrzpervsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="r5k3t84wp"/><path class="edj943bew"/><path class="wrzpervsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:text-flow-rows"} {...others} />);
}

export default Component;
