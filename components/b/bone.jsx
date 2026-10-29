import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxqipdbey.css';
import '../../css/r/r0o5csbbz.css';
import '../../css/i/im5ak682z.css';
import '../../css/l/lg1w-ib2u.css';
import '../../css/m/m3bazig9y.css';
import '../../css/z/znl4potho.css';
import '../../css/t/tqjp469jy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxqipdbey wm-shadow"/><path class="r0o5csbbz"/><path class="im5ak682z"/><path class="lg1w-ib2u"/><path class="m3bazig9y"/><path class="wm-shine znl4potho"/><path class="tqjp469jy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:bone"} {...others} />);
}

export default Component;
