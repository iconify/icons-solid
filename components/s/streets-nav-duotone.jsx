import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_kkd2brg.css';
import '../../css/g/g73wvxbdb.css';
import '../../css/a/a3cqnpbsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a_kkd2brg"/><path class="g73wvxbdb"/><path class="a3cqnpbsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:streets-nav-duotone"} {...others} />);
}

export default Component;
