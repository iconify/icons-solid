import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd7besbrf.css';
import '../../css/k/kgg90w3zy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wd7besbrf"/><path class="kgg90w3zy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-information-filled"} {...others} />);
}

export default Component;
