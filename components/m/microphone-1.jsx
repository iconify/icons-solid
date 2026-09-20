import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/b/bd4ni5bbe.css';
import '../../css/i/ik0namb9h.css';
import '../../css/u/uyhoxbgvi.css';
import '../../css/x/xe7e2acoq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="bd4ni5bbe"/><path class="ik0namb9h"/><path class="uyhoxbgvi"/><path class="xe7e2acoq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:microphone-1"} {...others} />);
}

export default Component;
