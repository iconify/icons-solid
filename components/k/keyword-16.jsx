import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trnzyybym.css';
import '../../css/s/shqj82b5l.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="trnzyybym"/><path class="shqj82b5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:keyword-16"} {...others} />);
}

export default Component;
