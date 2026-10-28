import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3hfu5bbh.css';
import '../../css/m/m02umccfs.css';
import '../../css/g/gk9-3d5qw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m3hfu5bbh"/><path class="m02umccfs"/><path class="gk9-3d5qw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:helmet"} {...others} />);
}

export default Component;
