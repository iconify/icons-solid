import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcb459bbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kcb459bbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:soft-drinks-bottle-1"} {...others} />);
}

export default Component;
