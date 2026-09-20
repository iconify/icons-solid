import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjnuvrbls.css';
import '../../css/o/oco7h52sv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="cjnuvrbls"/><path class="oco7h52sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:bring-to-back-16"} {...others} />);
}

export default Component;
