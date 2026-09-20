import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzk_u8uvf.css';
import '../../css/h/hcys5pimr.css';
import '../../css/c/cltfdlb1g.css';
import '../../css/m/m8-3fg9ek.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="jzk_u8uvf"/><path class="hcys5pimr"/><path class="cltfdlb1g"/><path class="m8-3fg9ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:rspec"} {...others} />);
}

export default Component;
