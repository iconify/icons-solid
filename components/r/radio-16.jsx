import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygc0_0gjy.css';
import '../../css/e/e1lpwkvyq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ygc0_0gjy"/><path clip-rule="evenodd" class="e1lpwkvyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:radio-16"} {...others} />);
}

export default Component;
