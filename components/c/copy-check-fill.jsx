import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr6rzobzg.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="wr6rzobzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:copy-check-fill"} {...others} />);
}

export default Component;
