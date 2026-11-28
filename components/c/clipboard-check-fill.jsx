import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjg4y1s3f.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="kjg4y1s3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:clipboard-check-fill"} {...others} />);
}

export default Component;
