import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9swzab_x.css';
import '../../css/o/obupphvdh.css';
import '../../css/g/gzwdznb2d.css';
import '../../css/y/y9hlo-yos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m9swzab_x"/><path class="obupphvdh"/><path class="gzwdznb2d"/><path class="y9hlo-yos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clipboard-list"} {...others} />);
}

export default Component;
