import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmllns1vc.css';
import '../../css/u/uqy1x4y0w.css';
import '../../css/d/d1kn0uj4f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pmllns1vc"/><path class="uqy1x4y0w"/><path class="d1kn0uj4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scraparr"} {...others} />);
}

export default Component;
