import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xjk_zbrsi.css';
import '../../css/f/fh3fxjrju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xjk_zbrsi"/><path class="fh3fxjrju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:at-off"} {...others} />);
}

export default Component;
