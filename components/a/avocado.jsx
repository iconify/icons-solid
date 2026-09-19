import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5e5ikb2t.css';
import '../../css/w/w07hk-pry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l5e5ikb2t"/><path class="w07hk-pry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:avocado"} {...others} />);
}

export default Component;
