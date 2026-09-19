import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hiowjvb0p.css';
import '../../css/m/mh9t29bel.css';
import '../../css/u/ujlhpwb_p.css';
import '../../css/c/ct6xmllof.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3qYrxemQ"><g class="ft5dv1b6b"><path class="hiowjvb0p"/><path class="mh9t29bel"/><path class="ujlhpwb_p"/><path class="ct6xmllof"/></g></mask></defs><path mask="url(#SVG3qYrxemQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:projector-three"} {...others} />);
}

export default Component;
