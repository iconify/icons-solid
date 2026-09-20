import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ldihy9slu.css';
import '../../css/r/rbem64adb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ldihy9slu"/><path class="rbem64adb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:roadmap"} {...others} />);
}

export default Component;
