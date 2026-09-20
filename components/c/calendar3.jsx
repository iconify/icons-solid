import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a6n0xibwq.css';
import '../../css/a/ajqhpcbca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a6n0xibwq"/><path class="ajqhpcbca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:calendar3"} {...others} />);
}

export default Component;
