import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7ctc27_t.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="u7ctc27_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:rock-fill"} {...others} />);
}

export default Component;
