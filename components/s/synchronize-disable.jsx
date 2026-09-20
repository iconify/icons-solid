import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/o/ooaz69bmt.css';
import '../../css/c/c41dj1b8t.css';
import '../../css/e/ee3qr-bes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="ooaz69bmt"/><path class="c41dj1b8t"/><path class="ee3qr-bes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:synchronize-disable"} {...others} />);
}

export default Component;
