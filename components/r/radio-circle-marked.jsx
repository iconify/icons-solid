import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe3cn1bfd.css';
import '../../css/i/i2k121bbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xe3cn1bfd"/><path class="i2k121bbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:radio-circle-marked"} {...others} />);
}

export default Component;
