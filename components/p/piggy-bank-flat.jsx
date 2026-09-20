import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q6kvbebqw.css';
import '../../css/k/kk1m-zb9c.css';
import '../../css/j/jo0iu6l9s.css';
import '../../css/i/if7ohhw0v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q6kvbebqw"/><path clip-rule="evenodd" class="kk1m-zb9c"/><path clip-rule="evenodd" class="jo0iu6l9s"/><path class="if7ohhw0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:piggy-bank-flat"} {...others} />);
}

export default Component;
