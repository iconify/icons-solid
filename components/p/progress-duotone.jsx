import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgcwpxbmf.css';
import '../../css/q/qjy94lrde.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="bgcwpxbmf"/><path clip-rule="evenodd" class="qjy94lrde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:progress-duotone"} {...others} />);
}

export default Component;
