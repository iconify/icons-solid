import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwdfadcgv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ea3o1dbkq.css';
import '../../css/b/b6vsz4bbf.css';
import '../../css/s/so2kmrb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwdfadcgv secondary"/><g class="dt0cm9dhy primary"><path class="ea3o1dbkq"/><path class="b6vsz4bbf"/><path class="so2kmrb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gallery-horizontal-duo"} {...others} />);
}

export default Component;
