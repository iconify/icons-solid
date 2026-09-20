import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qocb6tbrl.css';
import '../../css/q/qjh4_sbte.css';
import '../../css/a/ak1se0blo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="qocb6tbrl"/><circle class="qjh4_sbte"/><path class="ak1se0blo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cookie-filled"} {...others} />);
}

export default Component;
