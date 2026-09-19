import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh88sjbzq.css';
import '../../css/n/nhpgwyiio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nh88sjbzq"/><path class="nhpgwyiio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dog-body"} {...others} />);
}

export default Component;
