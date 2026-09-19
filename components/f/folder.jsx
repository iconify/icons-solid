import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kow-3lbqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kow-3lbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:folder"} {...others} />);
}

export default Component;
