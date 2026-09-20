import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/etkn6vbnv.css';
import '../../css/y/yf25-lbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="etkn6vbnv"/><path class="yf25-lbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:train-2"} {...others} />);
}

export default Component;
