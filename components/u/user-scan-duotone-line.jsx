import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/s/sq-5_fmts.css';
import '../../css/f/f3ydh4-xk.css';
import '../../css/b/b0ugci2cd.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGy0n0vefb"><g class="o58hkebvg"><path class="sq-5_fmts"/><path class="f3ydh4-xk"/><circle class="b0ugci2cd"/></g></mask></defs><path mask="url(#SVGy0n0vefb)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-scan-duotone-line"} {...others} />);
}

export default Component;
