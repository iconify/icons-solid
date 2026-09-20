import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yh39jqbpi.css';
import '../../css/p/pp2-2-clv.css';
import '../../css/h/hsyqjxz4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yh39jqbpi"/><path class="pp2-2-clv"/><path class="hsyqjxz4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:athletics-running-1"} {...others} />);
}

export default Component;
