import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze7hdcc3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ze7hdcc3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flow-documents-solid"} {...others} />);
}

export default Component;
