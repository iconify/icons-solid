import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gw7nf2z4x.css';
import '../../css/m/md286fbip.css';
import '../../css/b/bbtysibbk.css';
import '../../css/e/eu27vsb0f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="gw7nf2z4x"/><g class="md286fbip"><path class="bbtysibbk"/><path class="eu27vsb0f"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:vtho"} {...others} />);
}

export default Component;
