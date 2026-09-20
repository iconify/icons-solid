import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pphwdzbsq.css';
import '../../css/j/jxqbrew3y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pphwdzbsq"/><path class="jxqbrew3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hawser-dark"} {...others} />);
}

export default Component;
