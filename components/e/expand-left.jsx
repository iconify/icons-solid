import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/f694ycdso.css';
import '../../css/z/z3m924b_g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcZLgRdnM"><g class="v3_i3wktz"><path class="f694ycdso"/><path class="z3m924b_g"/></g></mask></defs><path mask="url(#SVGcZLgRdnM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:expand-left"} {...others} />);
}

export default Component;
