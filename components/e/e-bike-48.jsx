import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9faqobgu.css';
import '../../css/b/b-yzg1r4w.css';
import '../../css/h/hnipxac-p.css';
import '../../css/h/h6as5h2ht.css';
import '../../css/m/mpnwbubfi.css';
import '../../css/g/gzh1fdcmb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u9faqobgu"/><path class="b-yzg1r4w"/><path class="hnipxac-p"/><path class="h6as5h2ht"/><path class="mpnwbubfi"/><path class="gzh1fdcmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-bike-48"} {...others} />);
}

export default Component;
