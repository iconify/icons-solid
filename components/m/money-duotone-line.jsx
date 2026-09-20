import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2q96ob3h.css';
import '../../css/c/chkx1ht5g.css';
import '../../css/z/z8b5qr7pd.css';
import '../../css/w/wykbqxbhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v2q96ob3h"/><rect class="chkx1ht5g"/><path class="z8b5qr7pd"/><circle class="wykbqxbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:money-duotone-line"} {...others} />);
}

export default Component;
