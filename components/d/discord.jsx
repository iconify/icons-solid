import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s091mgb0k.css';
import '../../css/c/cbpc6zbgf.css';
import '../../css/m/m5eds2f1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s091mgb0k"/><circle class="cbpc6zbgf"/><circle class="m5eds2f1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:discord"} {...others} />);
}

export default Component;
