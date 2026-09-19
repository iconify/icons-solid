import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h85pweb1l.css';
import '../../css/z/zqpa_ob9q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIIaB77rg"><g class="v3_i3wktz"><path class="h85pweb1l"/><path class="zqpa_ob9q"/></g></mask></defs><path mask="url(#SVGIIaB77rg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-minus"} {...others} />);
}

export default Component;
