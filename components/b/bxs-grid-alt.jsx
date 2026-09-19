import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgjx7bwna.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kgjx7bwna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-grid-alt"} {...others} />);
}

export default Component;
