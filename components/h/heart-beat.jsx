import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5bbsjbhu.css';
import '../../css/v/vriw58bre.css';
import '../../css/h/hgr57bc5k.css';
import '../../css/o/o-xlspb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c5bbsjbhu"/><path class="vriw58bre"/><path class="hgr57bc5k"/><path class="o-xlspb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:heart-beat"} {...others} />);
}

export default Component;
