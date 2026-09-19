import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gbh1v2c4l.css';
import '../../css/t/tx75zlb7g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpL5YBdEZ"><g class="v3_i3wktz"><path class="gbh1v2c4l"/><path class="tx75zlb7g"/></g></mask></defs><path mask="url(#SVGpL5YBdEZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:stopwatch"} {...others} />);
}

export default Component;
