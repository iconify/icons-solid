import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/n6ohdwn_k.css';
import '../../css/r/rk0ci9b5a.css';
import '../../css/z/zgipi4gzm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJY7vRXYX"><g class="v3_i3wktz"><path class="n6ohdwn_k"/><path class="rk0ci9b5a"/><path class="zgipi4gzm"/></g></mask></defs><path mask="url(#SVGJY7vRXYX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mind-mapping"} {...others} />);
}

export default Component;
