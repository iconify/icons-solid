import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc39es8np.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b2u-o9mvb.css';
import '../../css/t/tmlpzdv0s.css';
import '../../css/x/xgp9xq0-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vc39es8np"/><g class="dt0cm9dhy primary"><path class="b2u-o9mvb"/><path class="tmlpzdv0s"/><path class="xgp9xq0-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hard-drive-duo"} {...others} />);
}

export default Component;
