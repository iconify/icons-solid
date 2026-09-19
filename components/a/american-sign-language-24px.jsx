import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r18ywyxbb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r18ywyxbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:american-sign-language-24px"} {...others} />);
}

export default Component;
