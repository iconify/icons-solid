import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvp3tpbju.css';
import '../../css/q/q36ormboe.css';
import '../../css/q/qoxxme1vj.css';
import '../../css/g/gcldfhbqv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mvp3tpbju"/><path class="q36ormboe"/><path class="qoxxme1vj"/><path class="gcldfhbqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:labelito-dark"} {...others} />);
}

export default Component;
