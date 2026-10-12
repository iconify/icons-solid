import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fojtamjbu.css';
import '../../css/q/qa1kzxbna.css';
import '../../css/b/bhgrkj_yw.css';
import '../../css/u/ui3jx7x5l.css';
import '../../css/u/uczgi2b2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fojtamjbu"/><path class="qa1kzxbna"/><path class="bhgrkj_yw"/><path class="ui3jx7x5l"/><path class="uczgi2b2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-sun"} {...others} />);
}

export default Component;
