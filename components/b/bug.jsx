import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/brkrw9h7x.css';
import '../../css/t/ty_pvobpe.css';
import '../../css/y/y7js8hemd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrMDBveSg"><g class="v3_i3wktz"><path class="brkrw9h7x"/><path class="ty_pvobpe"/><path class="y7js8hemd"/></g></mask></defs><path mask="url(#SVGrMDBveSg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bug"} {...others} />);
}

export default Component;
