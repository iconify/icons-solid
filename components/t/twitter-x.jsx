import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-zezz.css';
import '../../css/y/ydovum.css';
import '../../css/j/jdflhf.css';
import '../../css/m/mvdwqv.css';
import '../../css/d/d-nfa2oq.css';
import '../../css/d/d-dnm8dn.css';
import '../../css/d/d--r6z2q.css';
import '../../css/d/d-knq4xg.css';
import '../../css/d/d-_8bnjm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-zezz ydovum"/><path class="jdflhf ydovum"/><path class="mvdwqv ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:twitter-x"} {...others} />);
}

export default Component;
