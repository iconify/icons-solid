import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_j2c6bga.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jlkcm4hst.css';
import '../../css/n/nkc-s7b_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_j2c6bga secondary"/><g class="dt0cm9dhy primary"><path class="jlkcm4hst"/><path class="nkc-s7b_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pin-diagonal-duo"} {...others} />);
}

export default Component;
