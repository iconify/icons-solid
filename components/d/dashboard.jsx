import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj7v0vbun.css';
import '../../css/i/i28xa4bkq.css';
import '../../css/f/fli27abct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer fj7v0vbun"/><path class="duoicon-primary-layer i28xa4bkq"/><path class="duoicon-secondary-layer fli27abct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:dashboard"} {...others} />);
}

export default Component;
