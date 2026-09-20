import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/x/xkks1nbpj.css';
import '../../css/r/rmzj6nbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="xkks1nbpj"/><path class="rmzj6nbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-1"} {...others} />);
}

export default Component;
