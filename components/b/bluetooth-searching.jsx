import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fjtgj3buw.css';
import '../../css/z/zff2_4bao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="fjtgj3buw"/><path class="zff2_4bao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bluetooth-searching"} {...others} />);
}

export default Component;
