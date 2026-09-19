import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qkde5pb7p.css';
import '../../css/g/g09b36oos.css';
import '../../css/z/z1bj45_8a.css';
import '../../css/i/igx57ccmj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXarHtcLD"><g class="aql7dnt-u"><path class="qkde5pb7p"/><path class="g09b36oos"/><circle class="z1bj45_8a"/><path class="igx57ccmj"/></g></mask></defs><path mask="url(#SVGXarHtcLD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:iron-disable"} {...others} />);
}

export default Component;
