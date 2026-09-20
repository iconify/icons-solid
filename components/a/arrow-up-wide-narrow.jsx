import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkm2a9i0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rkm2a9i0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:arrow-up-wide-narrow"} {...others} />);
}

export default Component;
