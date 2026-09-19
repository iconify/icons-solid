import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1bsdki_t.css';
import '../../css/e/ene2v62vt.css';
import '../../css/g/ghy5e64mw.css';
import '../../css/p/pl7f1-bfq.css';
import '../../css/h/hleq-ab4e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG25dIMcQs"><g class="ft5dv1b6b"><rect class="b1bsdki_t"/><path class="ene2v62vt"/><circle class="ghy5e64mw"/><circle class="pl7f1-bfq"/><circle class="hleq-ab4e"/></g></mask></defs><path mask="url(#SVG25dIMcQs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:washing-machine-one"} {...others} />);
}

export default Component;
