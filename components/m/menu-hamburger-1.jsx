import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0s8dnbqg.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="b0s8dnbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:menu-hamburger-1"} {...others} />);
}

export default Component;
