import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jsy9-fwnj.css';
import '../../css/v/vemdn0bqs.css';
import '../../css/b/bcn2hfbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jsy9-fwnj"/><path class="vemdn0bqs"/><path class="bcn2hfbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:global-search"} {...others} />);
}

export default Component;
