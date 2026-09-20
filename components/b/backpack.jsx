import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lxen8rsgf.css';
import '../../css/f/fbe23xbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lxen8rsgf"/><path class="fbe23xbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:backpack"} {...others} />);
}

export default Component;
