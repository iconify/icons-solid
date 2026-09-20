import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxpm_3bdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zxpm_3bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:creative-commons-pd"} {...others} />);
}

export default Component;
