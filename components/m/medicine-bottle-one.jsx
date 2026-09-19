import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/m-fj4wzol.css';
import '../../css/b/buzi5ibmp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJYk3bc6W"><g class="v3_i3wktz"><path class="m-fj4wzol"/><path class="buzi5ibmp"/></g></mask></defs><path mask="url(#SVGJYk3bc6W)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:medicine-bottle-one"} {...others} />);
}

export default Component;
