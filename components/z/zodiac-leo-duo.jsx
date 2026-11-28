import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfmk6ub6x.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/whxzr4veb.css';
import '../../css/k/kzir-9buk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kfmk6ub6x secondary"/><g class="dt0cm9dhy primary"><path class="whxzr4veb"/><path class="kzir-9buk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zodiac-leo-duo"} {...others} />);
}

export default Component;
