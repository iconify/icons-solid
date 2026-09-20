import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jji4t1bqq.css';
import '../../css/y/ykcdqgr6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jji4t1bqq"/><path class="ykcdqgr6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:stamps-image"} {...others} />);
}

export default Component;
