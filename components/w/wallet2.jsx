import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pnrdlj49i.css';
import '../../css/l/lekeiyb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pnrdlj49i"/><path class="lekeiyb2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet2"} {...others} />);
}

export default Component;
