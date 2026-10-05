import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/u59vj0byr.css';
import '../../css/p/pvyu0vgcm.css';
import '../../css/b/b5sne2bxw.css';
import '../../css/i/ipsrlibww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="u59vj0byr"/><path class="pvyu0vgcm"/><path class="b5sne2bxw"/><path class="ipsrlibww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:git-branch"} {...others} />);
}

export default Component;
