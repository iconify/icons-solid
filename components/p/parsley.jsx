import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-5phdrxp.css';
import '../../css/j/jy7yjd_qr.css';
import '../../css/g/g-g8cgxth.css';
import '../../css/c/c40d55b5l.css';
import '../../css/h/h1uqilb5t.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="h-5phdrxp"/><path class="jy7yjd_qr"/><path class="g-g8cgxth"/><path class="c40d55b5l"/><path class="h1uqilb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:parsley"} {...others} />);
}

export default Component;
