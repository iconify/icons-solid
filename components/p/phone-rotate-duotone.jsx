import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lsd67ebtj.css';
import '../../css/o/o1uhj0kov.css';
import '../../css/b/bud1ugbge.css';
import '../../css/c/c6rhvn7kc.css';
import '../../css/g/gaw0ybcky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lsd67ebtj"/><path class="o1uhj0kov"/><path class="bud1ugbge"/><path class="c6rhvn7kc"/><path clip-rule="evenodd" class="gaw0ybcky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:phone-rotate-duotone"} {...others} />);
}

export default Component;
