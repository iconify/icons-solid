import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsz_kweuc.css';
import '../../css/n/nb3whwxik.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gsz_kweuc"/><path class="nb3whwxik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gamepad-button-right-16"} {...others} />);
}

export default Component;
