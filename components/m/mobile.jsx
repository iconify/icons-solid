import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axdu2ub5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="axdu2ub5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:mobile"} {...others} />);
}

export default Component;
