import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zrej-zbir.css';
import '../../css/b/b5w76yswc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zrej-zbir"/><path class="b5w76yswc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-wipe-paper-2"} {...others} />);
}

export default Component;
