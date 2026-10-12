import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp5a-txcx.css';
import '../../css/r/rtmrqnb5v.css';
import '../../css/b/bkcqmywkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mp5a-txcx"/><path class="rtmrqnb5v"/><path class="bkcqmywkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shoe-walk"} {...others} />);
}

export default Component;
