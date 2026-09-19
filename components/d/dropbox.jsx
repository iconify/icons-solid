import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/z6l2x0pwq.css';
import '../../css/f/fr5macbyd.css';
import '../../css/s/sl_g-c3zu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHpfRzeTP"><g class="v3_i3wktz"><path class="z6l2x0pwq"/><path class="fr5macbyd"/><path class="sl_g-c3zu"/></g></mask></defs><path mask="url(#SVGHpfRzeTP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:dropbox"} {...others} />);
}

export default Component;
