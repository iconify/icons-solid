import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/z5mka_22y.css';
import '../../css/y/yqkq0p36x.css';
import '../../css/i/i4wkegb-l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiDQMqbhV"><g class="v3_i3wktz"><path class="z5mka_22y"/><path class="yqkq0p36x"/><path class="i4wkegb-l"/></g></mask></defs><path mask="url(#SVGiDQMqbhV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mail"} {...others} />);
}

export default Component;
