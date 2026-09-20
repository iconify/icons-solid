import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-tlkjbkh.css';
import '../../css/e/e2c80abqq.css';
import '../../css/i/i7ytyep9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o-tlkjbkh"/><path class="e2c80abqq"/><path class="i7ytyep9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sticker-smile-duotone"} {...others} />);
}

export default Component;
