import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-v7-ebrl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f-v7-ebrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:play-btn-fill"} {...others} />);
}

export default Component;
