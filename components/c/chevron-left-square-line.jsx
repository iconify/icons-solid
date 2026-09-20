import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmluf-e8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cmluf-e8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:chevron-left-square-line"} {...others} />);
}

export default Component;
