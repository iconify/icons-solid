import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zejmubckr.css';
import '../../css/d/dy9twxbqe.css';
import '../../css/d/d2oowm1mw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zejmubckr"/><path class="dy9twxbqe"/><path class="d2oowm1mw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-monitor-dark"} {...others} />);
}

export default Component;
