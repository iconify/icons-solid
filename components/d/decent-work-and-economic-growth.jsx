import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/a/ajclsexjd.css';
import '../../css/x/x89mmzb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="ajclsexjd"/><path class="x89mmzb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:decent-work-and-economic-growth"} {...others} />);
}

export default Component;
