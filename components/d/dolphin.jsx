import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg2dmo1tu.css';
import '../../css/h/hb6p0db8j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlCaPwdaD"><g class="ft5dv1b6b"><path class="rg2dmo1tu"/><circle class="hb6p0db8j"/></g></mask></defs><path mask="url(#SVGlCaPwdaD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:dolphin"} {...others} />);
}

export default Component;
