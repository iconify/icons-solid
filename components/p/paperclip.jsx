import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kli4ktnoo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kli4ktnoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:paperclip"} {...others} />);
}

export default Component;
