import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zujkk5zci.css';
import '../../css/e/etr_cu8yu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zujkk5zci"/><path class="etr_cu8yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gamepad-button-left-16"} {...others} />);
}

export default Component;
