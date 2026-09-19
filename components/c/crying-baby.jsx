import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/t66yi6bna.css';
import '../../css/m/mhsmvbuqt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgbmeKdJf"><g class="v3_i3wktz"><path class="t66yi6bna"/><path class="mhsmvbuqt"/></g></mask></defs><path mask="url(#SVGgbmeKdJf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:crying-baby"} {...others} />);
}

export default Component;
