import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y7c-tkbkg.css';
import '../../css/g/ger36zmtv.css';
import '../../css/j/j3yvlke8a.css';
import '../../css/m/m8151hbws.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiPQFJd5l"><g class="s9cl3zbei"><path class="y7c-tkbkg"/><path class="ger36zmtv"/><path class="j3yvlke8a"/><path class="m8151hbws"/></g></mask></defs><path mask="url(#SVGiPQFJd5l)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:disk"} {...others} />);
}

export default Component;
