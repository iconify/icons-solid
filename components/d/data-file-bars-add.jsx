import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dyo27qb8m.css';
import '../../css/s/s1d6m6bqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dyo27qb8m"/><path class="s1d6m6bqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:data-file-bars-add"} {...others} />);
}

export default Component;
