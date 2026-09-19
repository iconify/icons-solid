import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/afq7mjurd.css';
import '../../css/e/eiol0ep0o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHp2ribKM"><g class="v3_i3wktz"><path class="afq7mjurd"/><path class="eiol0ep0o"/></g></mask></defs><path mask="url(#SVGHp2ribKM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:phone-incoming"} {...others} />);
}

export default Component;
