import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pu6_gdjrb.css';
import '../../css/o/o-om9db6c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4IeoacRd"><g class="v3_i3wktz"><path class="pu6_gdjrb"/><path class="o-om9db6c"/></g></mask></defs><path mask="url(#SVG4IeoacRd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:slide"} {...others} />);
}

export default Component;
