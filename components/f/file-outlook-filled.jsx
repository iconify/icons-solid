import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3i4310qw.css';
import '../../css/k/kd0bdubwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t3i4310qw"/><path class="kd0bdubwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-outlook-filled"} {...others} />);
}

export default Component;
