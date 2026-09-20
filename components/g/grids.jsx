import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxnk6c03f.css';
import '../../css/n/n47i0wbat.css';
import '../../css/k/ke_ofwcml.css';
import '../../css/t/t1ote7hfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xxnk6c03f"/><path class="n47i0wbat"/><path class="ke_ofwcml"/><path class="t1ote7hfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:grids"} {...others} />);
}

export default Component;
