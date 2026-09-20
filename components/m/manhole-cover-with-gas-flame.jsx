import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eimvo_btn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eimvo_btn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:manhole-cover-with-gas-flame"} {...others} />);
}

export default Component;
