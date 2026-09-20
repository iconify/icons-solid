import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y845pe3tp.css';
import '../../css/n/nyqqef2cl.css';
import '../../css/n/n54qw7bnb.css';
import '../../css/l/l6bl47bbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y845pe3tp"/><path class="nyqqef2cl"/><path class="n54qw7bnb"/><path class="l6bl47bbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:rolling-pin"} {...others} />);
}

export default Component;
