import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5ke29wou.css';
import '../../css/s/skcz4vabf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGruW5zblY"><g class="ft5dv1b6b"><rect class="r5ke29wou"/><path class="skcz4vabf"/></g></mask></defs><path mask="url(#SVGruW5zblY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:extend"} {...others} />);
}

export default Component;
