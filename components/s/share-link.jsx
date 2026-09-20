import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/e/ev_angbau.css';
import '../../css/f/f4slk7mgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ev_angbau"/><path class="f4slk7mgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:share-link"} {...others} />);
}

export default Component;
