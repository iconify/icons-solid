import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/guwyv2bao.css';
import '../../css/h/h6koctbny.css';
import '../../css/g/g7zv9z6hb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="guwyv2bao"/><path class="h6koctbny"/><path class="g7zv9z6hb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:boxing-glove"} {...others} />);
}

export default Component;
