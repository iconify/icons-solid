import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcj4w92ez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kcj4w92ez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alt-arrow-left-broken"} {...others} />);
}

export default Component;
