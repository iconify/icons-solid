import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zwzfzolzd.css';
import '../../css/a/ar-cvwksl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zwzfzolzd"/><path class="ar-cvwksl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:forward-item2"} {...others} />);
}

export default Component;
