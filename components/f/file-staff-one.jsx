import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/smvgv0b2x.css';
import '../../css/d/drx_vyjba.css';
import '../../css/i/im-kzebzv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVdc9zdeI"><g class="aql7dnt-u"><path class="smvgv0b2x"/><circle class="drx_vyjba"/><path class="im-kzebzv"/></g></mask></defs><path mask="url(#SVGVdc9zdeI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-staff-one"} {...others} />);
}

export default Component;
