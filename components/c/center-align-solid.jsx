import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vezqu9bki.css';
import '../../css/g/gofpqh03b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vezqu9bki"/><path class="gofpqh03b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:center-align-solid"} {...others} />);
}

export default Component;
