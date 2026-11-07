import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5u7t3i_i.css';
import '../../css/x/x24uzsf-w.css';
import '../../css/b/bq8-esbzm.css';
import '../../css/o/on0sv8bmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o5u7t3i_i"/><path class="x24uzsf-w"/><path class="bq8-esbzm"/><path clip-rule="evenodd" class="on0sv8bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:masks-outline"} {...others} />);
}

export default Component;
