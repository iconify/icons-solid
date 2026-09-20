import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hha2vm2py.css';
import '../../css/d/dxvormbsv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hha2vm2py"/><path class="dxvormbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-contract-open"} {...others} />);
}

export default Component;
