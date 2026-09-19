import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6-p3cb7a.css';
import '../../css/s/sxs8wrbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c6-p3cb7a duoicon-primary-layer"/><path class="duoicon-secondary-layer sxs8wrbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:moon-2"} {...others} />);
}

export default Component;
