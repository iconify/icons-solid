import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs2bv9i_q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hs2bv9i_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-illustrator-dark"} {...others} />);
}

export default Component;
