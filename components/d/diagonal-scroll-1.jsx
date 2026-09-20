import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ireq_876v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ireq_876v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:diagonal-scroll-1"} {...others} />);
}

export default Component;
