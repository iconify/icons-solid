import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udz5nqb7v.css';
import '../../css/c/cez-1qbcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udz5nqb7v"/><path class="cez-1qbcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pip-bold"} {...others} />);
}

export default Component;
