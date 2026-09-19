import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/r/r-k0i6bac.css';
import '../../css/u/ux7etcc_z.css';
import '../../css/h/hzw2nxq1q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7OARJbrF"><g class="wwvp95byt"><path clip-rule="evenodd" class="r-k0i6bac"/><path class="ux7etcc_z"/><path class="hzw2nxq1q"/></g></mask></defs><path mask="url(#SVG7OARJbrF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:building-three"} {...others} />);
}

export default Component;
