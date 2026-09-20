import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/v/v8jzga.css';
import '../../css/w/w2-cir.css';
import '../../css/o/om79qv.css';
import '../../css/c/c27iog.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-22.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew v8jzga w2-cir"/><path class="iw1iew om79qv v8jzga"/><path class="c27iog iw1iew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:person-remove-twotone"} {...others} />);
}

export default Component;
