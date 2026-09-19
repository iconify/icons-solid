import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as2wn2lgv.css';
import '../../css/v/vgah8qb4e.css';
import '../../css/m/maenk-g2f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlDoIJuob"><g class="ft5dv1b6b"><path class="as2wn2lgv"/><path clip-rule="evenodd" class="vgah8qb4e"/><path class="maenk-g2f"/></g></mask></defs><path mask="url(#SVGlDoIJuob)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:people-minus-one"} {...others} />);
}

export default Component;
