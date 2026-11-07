import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_r2oob-p.css';
import '../../css/s/spvl3mbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w_r2oob-p"/><path class="spvl3mbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-academic-cap-2-outline"} {...others} />);
}

export default Component;
