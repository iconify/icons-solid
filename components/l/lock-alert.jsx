import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn4lzi02w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cn4lzi02w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:lock-alert"} {...others} />);
}

export default Component;
