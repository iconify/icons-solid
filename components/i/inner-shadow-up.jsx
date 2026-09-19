import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/x/xxb39ebcb.css';
import '../../css/r/rmado5b8p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGA3zqNG0A"><g class="hv130ab-t"><path clip-rule="evenodd" class="xxb39ebcb"/><path class="rmado5b8p"/></g></mask></defs><path mask="url(#SVGA3zqNG0A)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:inner-shadow-up"} {...others} />);
}

export default Component;
