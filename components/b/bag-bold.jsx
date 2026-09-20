import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c74uzd3ef.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c74uzd3ef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-bold"} {...others} />);
}

export default Component;
