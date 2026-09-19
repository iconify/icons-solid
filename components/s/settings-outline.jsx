import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bja55jb5m.css';
import '../../css/u/u6ndf9jqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="settings-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="bja55jb5m"/><path class="u6ndf9jqp"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:settings-outline"} {...others} />);
}

export default Component;
