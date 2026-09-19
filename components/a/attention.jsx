import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6s3-gesu.css';
import '../../css/u/uqffttbwh.css';
import '../../css/f/fog_j6b2n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGofdc9gev"><g class="ft5dv1b6b"><path class="x6s3-gesu"/><path clip-rule="evenodd" class="uqffttbwh"/><path class="fog_j6b2n"/></g></mask></defs><path mask="url(#SVGofdc9gev)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:attention"} {...others} />);
}

export default Component;
