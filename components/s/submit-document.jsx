import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gfn2cjbgm.css';
import '../../css/r/r06qfdbgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gfn2cjbgm"/><path class="r06qfdbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:submit-document"} {...others} />);
}

export default Component;
