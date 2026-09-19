import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euvm4m4yy.css';
import '../../css/d/d7eb7bjvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer euvm4m4yy"/><path class="d7eb7bjvg duoicon-primary-layer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:smartphone"} {...others} />);
}

export default Component;
