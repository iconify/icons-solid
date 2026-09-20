import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he_rybccd.css';
import '../../css/r/rvl2dhb2g.css';
import '../../css/c/co_1e37mo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="he_rybccd"/><path clip-rule="evenodd" class="rvl2dhb2g"/><path class="co_1e37mo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:botanix"} {...others} />);
}

export default Component;
