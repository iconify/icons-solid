import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocmghj2nz.css';
import '../../css/o/o9xqnw6dm.css';
import '../../css/q/qh7qxgsvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ocmghj2nz"/><path clip-rule="evenodd" class="o9xqnw6dm"/><path class="qh7qxgsvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:screen-share-lock"} {...others} />);
}

export default Component;
