import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ig7m_j8ip.css';
import '../../css/f/f8paaybnb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ig7m_j8ip"/><path class="f8paaybnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-open-check-filled"} {...others} />);
}

export default Component;
