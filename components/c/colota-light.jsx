import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2e05bcja.css';
import '../../css/v/vojou6b4q.css';
import '../../css/f/f4pvf8bfr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d2e05bcja"/><path class="vojou6b4q"/><path class="f4pvf8bfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:colota-light"} {...others} />);
}

export default Component;
