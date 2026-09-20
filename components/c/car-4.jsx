import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3h4-wb4f.css';
import '../../css/p/pym4kbd7y.css';
import '../../css/i/ii3um__kf.css';
import '../../css/w/wyg38yjeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s3h4-wb4f"/><path class="pym4kbd7y"/><path class="ii3um__kf"/><path class="wyg38yjeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:car-4"} {...others} />);
}

export default Component;
