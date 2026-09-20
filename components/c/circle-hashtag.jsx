import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q58jyg4uk.css';
import '../../css/b/bkf9fvy4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="q58jyg4uk"/><path class="bkf9fvy4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-hashtag"} {...others} />);
}

export default Component;
