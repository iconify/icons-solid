import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3vmb7bdz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u3vmb7bdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:emoji-smile-fill"} {...others} />);
}

export default Component;
