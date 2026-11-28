import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6-05acil.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zt81p22du.css';
import '../../css/i/i2ilhfsgw.css';
import '../../css/i/i09dt9z0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary z6-05acil"/><g class="dt0cm9dhy primary"><path class="zt81p22du"/><path class="i2ilhfsgw"/><path class="i09dt9z0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cards-duo"} {...others} />);
}

export default Component;
