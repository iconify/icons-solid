import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/faf5xj6kl.css';
import '../../css/f/f5tv_ebqr.css';
import '../../css/j/junp1tb6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="faf5xj6kl"/><path class="f5tv_ebqr"/><path class="junp1tb6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:give-gift"} {...others} />);
}

export default Component;
