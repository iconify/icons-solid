import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocb0_hbyt.css';

const viewBox = {"width":29,"height":24};
const content = `<path class="ocb0_hbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:outdent"} {...others} />);
}

export default Component;
