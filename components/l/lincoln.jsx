import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/u_yu_z0ri.css';
import '../../css/i/imnm-7_fw.css';
import '../../css/w/wd_ka24qp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMqVYreIW"><g class="s9cl3zbei"><path class="u_yu_z0ri"/><path class="imnm-7_fw"/><path class="wd_ka24qp"/></g></mask></defs><path mask="url(#SVGMqVYreIW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:lincoln"} {...others} />);
}

export default Component;
