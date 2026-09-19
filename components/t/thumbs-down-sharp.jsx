import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbd9vjcah.css';
import '../../css/o/o559_525r.css';
import '../../css/c/cn051wbje.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hbd9vjcah"/><path class="o559_525r"/><path class="cn051wbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:thumbs-down-sharp"} {...others} />);
}

export default Component;
