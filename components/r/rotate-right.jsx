import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/e/e16bk6emp.css';
import '../../css/p/p62-edcjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="e16bk6emp"/><path class="p62-edcjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:rotate-right"} {...others} />);
}

export default Component;
