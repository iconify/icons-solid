import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7d6_i95l.css';
import '../../css/c/ca4m0qbws.css';
import '../../css/f/fkx8f7oxo.css';
import '../../css/e/ep14tjbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(135 8.023 8.027)scale(-1 1)" class="v7d6_i95l"/><path class="ca4m0qbws"/><path clip-rule="evenodd" class="fkx8f7oxo"/><path class="ep14tjbdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-edit"} {...others} />);
}

export default Component;
