import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/geqzyob2p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/riz3hy1-t.css';
import '../../css/y/y9ufshblj.css';
import '../../css/z/zrlh-6b7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="geqzyob2p secondary"/><g class="dt0cm9dhy primary"><circle class="riz3hy1-t"/><circle class="y9ufshblj"/><path class="zrlh-6b7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:target-duo"} {...others} />);
}

export default Component;
