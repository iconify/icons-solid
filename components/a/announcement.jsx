import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/y36p79bsk.css';
import '../../css/s/sj4ws-i4j.css';
import '../../css/a/a4m4flg4d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGghnIveXz"><g class="v3_i3wktz"><rect class="y36p79bsk"/><path class="sj4ws-i4j"/><path class="a4m4flg4d"/></g></mask></defs><path mask="url(#SVGghnIveXz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:announcement"} {...others} />);
}

export default Component;
