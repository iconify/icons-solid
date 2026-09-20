import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l19hjacna.css';
import '../../css/p/pfrgpji_f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l19hjacna"/><path class="pfrgpji_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wapy-dev-dark"} {...others} />);
}

export default Component;
