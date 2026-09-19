import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl3qt1b5o.css';
import '../../css/o/o6g1-kwkw.css';
import '../../css/l/l2uqvu0mm.css';
import '../../css/d/dygyyv64v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sl3qt1b5o"/><path class="o6g1-kwkw"/><path class="l2uqvu0mm"/><path class="dygyyv64v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bluebook"} {...others} />);
}

export default Component;
