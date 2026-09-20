import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn9vt7btf.css';
import '../../css/r/ravm008iv.css';
import '../../css/u/uu72obc_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hn9vt7btf"/><path class="ravm008iv"/><path class="uu72obc_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:earth-filled"} {...others} />);
}

export default Component;
