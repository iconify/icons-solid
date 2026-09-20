import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b7u8biprd.css';
import '../../css/a/a1d_fdc0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b7u8biprd"/><path class="a1d_fdc0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-left3"} {...others} />);
}

export default Component;
