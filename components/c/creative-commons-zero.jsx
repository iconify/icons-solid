import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2qj_dbwn.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="s2qj_dbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:creative-commons-zero"} {...others} />);
}

export default Component;
