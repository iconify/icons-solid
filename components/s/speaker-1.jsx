import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gm22kabjz.css';
import '../../css/m/myw31rfqw.css';
import '../../css/c/cvgdryhog.css';
import '../../css/g/gk-4cegtw.css';
import '../../css/t/t10wifwed.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gm22kabjz"/><path class="myw31rfqw"/><path class="cvgdryhog"/><path class="gk-4cegtw"/><path class="t10wifwed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:speaker-1"} {...others} />);
}

export default Component;
