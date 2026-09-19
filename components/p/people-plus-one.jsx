import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as2wn2lgv.css';
import '../../css/d/duptweowj.css';
import '../../css/s/soahxebfl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEMywHeud"><g class="ft5dv1b6b"><path class="as2wn2lgv"/><path clip-rule="evenodd" class="duptweowj"/><path class="soahxebfl"/></g></mask></defs><path mask="url(#SVGEMywHeud)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:people-plus-one"} {...others} />);
}

export default Component;
