import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/n/n9z1r6vko.css';
import '../../css/c/cqqjrobdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="n9z1r6vko"/><path class="cqqjrobdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:cellular-network-5g"} {...others} />);
}

export default Component;
