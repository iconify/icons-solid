import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz_8dhp3p.css';
import '../../css/v/v85x6e0bv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cz_8dhp3p"/><path class="v85x6e0bv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:code-block"} {...others} />);
}

export default Component;
