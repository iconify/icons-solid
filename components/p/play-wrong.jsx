import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/afw5bxb9f.css';
import '../../css/s/s51uqybkz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGu13uHDQK"><g class="v3_i3wktz"><path class="afw5bxb9f"/><path class="s51uqybkz"/></g></mask></defs><path mask="url(#SVGu13uHDQK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:play-wrong"} {...others} />);
}

export default Component;
