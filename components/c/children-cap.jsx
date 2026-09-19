import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/sgc6nbcvj.css';
import '../../css/i/iewq-3_sp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGB2JP3bqc"><g class="aql7dnt-u"><path class="sgc6nbcvj"/><rect class="iewq-3_sp"/></g></mask></defs><path mask="url(#SVGB2JP3bqc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:children-cap"} {...others} />);
}

export default Component;
