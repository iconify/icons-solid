import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/v10irub5c.css';
import '../../css/j/j1_0s3bib.css';
import '../../css/y/yh8u5h8yq.css';
import '../../css/b/buzxujbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="v10irub5c"/><path class="j1_0s3bib"/><path class="yh8u5h8yq"/><path class="buzxujbpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:sphere-shape"} {...others} />);
}

export default Component;
