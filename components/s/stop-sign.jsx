import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kkdr79bop.css';
import '../../css/a/ah-vqkbix.css';
import '../../css/y/yjvkyac7r.css';
import '../../css/f/fyjdfsbsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kkdr79bop"/><path class="ah-vqkbix"/><path class="yjvkyac7r"/><path class="fyjdfsbsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:stop-sign"} {...others} />);
}

export default Component;
