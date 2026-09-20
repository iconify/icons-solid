import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sxg-3h69h.css';
import '../../css/q/qo4pcjauq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sxg-3h69h"/><path class="qo4pcjauq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:book6"} {...others} />);
}

export default Component;
