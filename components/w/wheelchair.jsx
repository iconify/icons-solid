import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghwpby8wk.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ghwpby8wk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:wheelchair"} {...others} />);
}

export default Component;
