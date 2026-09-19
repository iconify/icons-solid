import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tij9n_bhf.css';
import '../../css/e/ezspdub9l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tij9n_bhf"/><path class="ezspdub9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:tennisball"} {...others} />);
}

export default Component;
