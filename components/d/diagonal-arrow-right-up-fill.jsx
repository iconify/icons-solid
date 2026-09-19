import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfuo3_qvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfuo3_qvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:diagonal-arrow-right-up-fill"} {...others} />);
}

export default Component;
