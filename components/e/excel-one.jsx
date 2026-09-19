import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/x/xcc5o-bxz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqAlXveXc"><g class="s9cl3zbei"><rect class="g47cb4b4t"/><path class="xcc5o-bxz"/></g></mask></defs><path mask="url(#SVGqAlXveXc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:excel-one"} {...others} />);
}

export default Component;
