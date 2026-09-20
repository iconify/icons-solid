import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0sz5dkww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f0sz5dkww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:comment"} {...others} />);
}

export default Component;
