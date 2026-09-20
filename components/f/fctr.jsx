import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_qag_boy.css';
import '../../css/i/ik464kqyv.css';
import '../../css/o/okefe65_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_qag_boy"/><path class="ik464kqyv"/><path class="okefe65_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:fctr"} {...others} />);
}

export default Component;
