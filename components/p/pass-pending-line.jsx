import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9r-at6ql.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y9r-at6ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:pass-pending-line"} {...others} />);
}

export default Component;
