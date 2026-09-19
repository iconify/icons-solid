import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cm2clvi6w.css';

const viewBox = {"width":1920,"height":1280};
const content = `<path class="cm2clvi6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:keyboard-o"} {...others} />);
}

export default Component;
