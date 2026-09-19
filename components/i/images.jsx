import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4p2dtbwt.css';
import '../../css/i/ia-bsrbll.css';
import '../../css/b/bog62tbai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r4p2dtbwt"/><path class="ia-bsrbll"/><path class="bog62tbai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:images"} {...others} />);
}

export default Component;
