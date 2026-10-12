import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cyxh3xb7u.css';
import '../../css/p/pkm41d2qt.css';
import '../../css/x/x5gynzb7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="matrix(1 0 0 -1 1.67 21.73)" class="cyxh3xb7u"/><circle transform="matrix(1 0 0 -1 1.67 21.73)" class="pkm41d2qt"/><path class="x5gynzb7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:route-map-check"} {...others} />);
}

export default Component;
