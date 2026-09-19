import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bno6c1bol.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bno6c1bol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:amusement-park"} {...others} />);
}

export default Component;
