import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz6yknbnq.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="xz6yknbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:currency-euro-16-solid"} {...others} />);
}

export default Component;
