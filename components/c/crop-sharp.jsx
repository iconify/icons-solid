import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0551ib7x.css';
import '../../css/j/jnf1tabyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u0551ib7x"/><path class="jnf1tabyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:crop-sharp"} {...others} />);
}

export default Component;
