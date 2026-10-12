import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-tkve4cs.css';
import '../../css/s/sdgpjnb2f.css';
import '../../css/o/o85glehef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w-tkve4cs"/><path class="sdgpjnb2f"/><circle class="o85glehef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bolt"} {...others} />);
}

export default Component;
