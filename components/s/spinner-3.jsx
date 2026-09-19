import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9grvyq5f.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="f9grvyq5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:spinner-3"} {...others} />);
}

export default Component;
