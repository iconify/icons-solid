import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjroy5biw.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="hjroy5biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:file-share-2-solid"} {...others} />);
}

export default Component;
