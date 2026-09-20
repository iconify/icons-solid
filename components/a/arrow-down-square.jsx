import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dxrprw4rb.css';
import '../../css/r/rn0033ozd.css';
import '../../css/t/tbfod3hgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dxrprw4rb"/><path class="rn0033ozd"/><rect class="tbfod3hgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:arrow-down-square"} {...others} />);
}

export default Component;
