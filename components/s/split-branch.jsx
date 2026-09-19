import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_j2mjbpq.css';
import '../../css/i/iiqksgb7d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGphGeOdXM"><g class="ft5dv1b6b"><path class="v_j2mjbpq"/><path class="iiqksgb7d"/></g></mask></defs><path mask="url(#SVGphGeOdXM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:split-branch"} {...others} />);
}

export default Component;
