import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ee2rqwbxd.css';
import '../../css/p/pgabhk2zo.css';
import '../../css/v/vdu6k2bug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ee2rqwbxd"/><path class="pgabhk2zo"/><path class="vdu6k2bug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-heart"} {...others} />);
}

export default Component;
