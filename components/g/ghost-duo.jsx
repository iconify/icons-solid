import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gh9cc6b_f.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d7ntyebyk.css';
import '../../css/a/a0e2ybb-k.css';
import '../../css/l/l9z_5vbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gh9cc6b_f secondary"/><g class="dt0cm9dhy primary"><path class="d7ntyebyk"/><path class="a0e2ybb-k"/><path class="l9z_5vbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ghost-duo"} {...others} />);
}

export default Component;
