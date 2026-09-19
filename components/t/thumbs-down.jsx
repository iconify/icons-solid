import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9c5i0b2v.css';
import '../../css/o/o559_525r.css';
import '../../css/c/cn051wbje.css';
import '../../css/v/v4uhdgb-m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k9c5i0b2v"/><path class="o559_525r"/><path class="cn051wbje"/><path class="v4uhdgb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:thumbs-down"} {...others} />);
}

export default Component;
