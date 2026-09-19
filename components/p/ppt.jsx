import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fzt9c0b2m.css';
import '../../css/m/md9y_u8eo.css';
import '../../css/z/z2_43e1dl.css';
import '../../css/y/y3_vjac4a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRBPVS6Hj"><g class="wwvp95byt"><path class="fzt9c0b2m"/><path clip-rule="evenodd" class="md9y_u8eo"/><path class="z2_43e1dl"/><path class="y3_vjac4a"/></g></mask></defs><path mask="url(#SVGRBPVS6Hj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ppt"} {...others} />);
}

export default Component;
