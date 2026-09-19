import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ue81mlbze.css';
import '../../css/z/zdg9yvbsx.css';
import '../../css/k/k29yudf0l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdMjhMbPE"><g class="ft5dv1b6b"><path class="ue81mlbze"/><path class="zdg9yvbsx"/><path class="k29yudf0l"/></g></mask></defs><path mask="url(#SVGdMjhMbPE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:signal-strength"} {...others} />);
}

export default Component;
