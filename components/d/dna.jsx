import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/l/llabn6bid.css';
import '../../css/h/h4lkxjb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="llabn6bid"/><path class="h4lkxjb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:dna"} {...others} />);
}

export default Component;
