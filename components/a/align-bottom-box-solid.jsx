import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kxce0pcdg.css';
import '../../css/g/ghexmyv8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kxce0pcdg"/><path class="ghexmyv8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:align-bottom-box-solid"} {...others} />);
}

export default Component;
