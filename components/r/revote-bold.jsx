import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddmmyzkas.css';
import '../../css/l/lz0rx605g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ddmmyzkas"/><path class="lz0rx605g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:revote-bold"} {...others} />);
}

export default Component;
