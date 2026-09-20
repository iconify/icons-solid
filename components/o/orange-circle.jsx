import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/numv4vb1m.css';
import '../../css/s/snpiwsb_l.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="numv4vb1m"/><circle class="snpiwsb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:orange-circle"} {...others} />);
}

export default Component;
