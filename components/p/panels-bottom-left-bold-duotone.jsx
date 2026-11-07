import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k408t5b_f.css';
import '../../css/u/u7zit7oth.css';
import '../../css/i/iz-4hbcxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k408t5b_f"/><path class="u7zit7oth"/><path class="iz-4hbcxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-bottom-left-bold-duotone"} {...others} />);
}

export default Component;
