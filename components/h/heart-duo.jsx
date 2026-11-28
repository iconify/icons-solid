import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea5taoauh.css';
import '../../css/z/zel29wb1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ea5taoauh secondary"/><path class="primary zel29wb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:heart-duo"} {...others} />);
}

export default Component;
