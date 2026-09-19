import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6erbmc9w.css';
import '../../css/y/yo0nj-rgo.css';
import '../../css/p/ps6glmb7o.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="c6erbmc9w clr-i-solid clr-i-solid-path-1"/><path class="clr-i-solid clr-i-solid-path-2 yo0nj-rgo"/><path class="clr-i-solid clr-i-solid-path-3 ps6glmb7o"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:tools-solid"} {...others} />);
}

export default Component;
