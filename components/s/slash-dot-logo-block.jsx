import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmf-2wqcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tmf-2wqcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:slash-dot-logo-block"} {...others} />);
}

export default Component;
