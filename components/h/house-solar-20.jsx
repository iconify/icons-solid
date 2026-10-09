import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6-rcbv6t.css';
import '../../css/z/z8qts6bhu.css';
import '../../css/p/pgb6kxbaw.css';
import '../../css/a/am_oegbzf.css';
import '../../css/g/g776s3b5m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x6-rcbv6t"/><path class="z8qts6bhu"/><path class="pgb6kxbaw"/><path class="am_oegbzf"/><path class="g776s3b5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-solar-20"} {...others} />);
}

export default Component;
