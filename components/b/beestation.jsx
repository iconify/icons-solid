import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okdhzpq9i.css';
import '../../css/s/skok2lbcb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="okdhzpq9i"/><path class="skok2lbcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beestation"} {...others} />);
}

export default Component;
