import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgga7abld.css';
import '../../css/h/h8sbx2b5d.css';
import '../../css/n/nzovm6bgd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGueEmudQp"><g class="cgga7abld"><path class="h8sbx2b5d"/><path class="nzovm6bgd"/></g></mask></defs><path mask="url(#SVGueEmudQp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gymnastics"} {...others} />);
}

export default Component;
