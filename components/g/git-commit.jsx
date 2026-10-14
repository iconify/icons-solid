import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/u1b612b-s.css';
import '../../css/z/zb6ugnr2e.css';
import '../../css/e/ey9qgmrtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="u1b612b-s"/><path class="zb6ugnr2e"/><path class="ey9qgmrtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:git-commit"} {...others} />);
}

export default Component;
