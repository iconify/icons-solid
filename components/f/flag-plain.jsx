import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go7ozzb7r.css';
import '../../css/v/v2fjidcfm.css';
import '../../css/x/xq-w3syqm.css';
import '../../css/e/eul8dpbkk.css';
import '../../css/s/s1s-tacik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="go7ozzb7r"/><path class="v2fjidcfm"/><path class="xq-w3syqm"/><path class="eul8dpbkk"/><path class="s1s-tacik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:flag-plain"} {...others} />);
}

export default Component;
