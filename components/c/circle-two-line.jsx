import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/eggrvn9ds.css';
import '../../css/s/s13dhxbgk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSyLUNz4N"><g class="v3_i3wktz"><path class="eggrvn9ds"/><path class="s13dhxbgk"/></g></mask></defs><path mask="url(#SVGSyLUNz4N)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:circle-two-line"} {...others} />);
}

export default Component;
