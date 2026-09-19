import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drritjblj.css';
import '../../css/w/wk4tu6b9n.css';
import '../../css/d/dkypacb8a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="drritjblj"/><path class="wk4tu6b9n"/><path class="dkypacb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-people"} {...others} />);
}

export default Component;
