import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a44pscc1r.css';
import '../../css/p/pzzss1ove.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a44pscc1r"/><path class="pzzss1ove"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pen2"} {...others} />);
}

export default Component;
