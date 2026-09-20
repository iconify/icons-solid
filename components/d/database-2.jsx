import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4lr9viii.css';
import '../../css/b/b4vatjbbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c4lr9viii"/><path class="b4vatjbbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:database-2"} {...others} />);
}

export default Component;
