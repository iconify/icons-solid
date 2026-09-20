import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-f8hredq.css';
import '../../css/c/c0k_mybxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e-f8hredq"/><path class="c0k_mybxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-book-open-filled"} {...others} />);
}

export default Component;
