import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwxsw6bus.css';
import '../../css/u/uwv24tbgs.css';
import '../../css/o/o6f0wm0oo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iwxsw6bus"/><path class="uwv24tbgs"/><path class="o6f0wm0oo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:angle"} {...others} />);
}

export default Component;
