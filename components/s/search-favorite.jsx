import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tex8vbcbz.css';
import '../../css/o/ojgirtbzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tex8vbcbz"/><path class="ojgirtbzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:search-favorite"} {...others} />);
}

export default Component;
