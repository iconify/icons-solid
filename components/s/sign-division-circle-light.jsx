import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zxjbngbxy.css';
import '../../css/g/g8m3171mh.css';
import '../../css/l/l9ewbkbml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="zxjbngbxy"/><path class="g8m3171mh"/><path class="l9ewbkbml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-division-circle-light"} {...others} />);
}

export default Component;
