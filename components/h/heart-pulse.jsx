import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6mivl14w.css';
import '../../css/o/ohpjererv.css';
import '../../css/k/kyfoklson.css';
import '../../css/c/cgny7ubsw.css';
import '../../css/a/a6ogh7bzp.css';
import '../../css/w/w_czame4b.css';
import '../../css/r/rlnm26x0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow z6mivl14w"/><path class="ohpjererv wm-k"/><path class="kyfoklson wm-k"/><path class="cgny7ubsw wm-k"/><path class="a6ogh7bzp wm-k"/><path class="w_czame4b wm-shine"/><path class="rlnm26x0b wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:heart-pulse"} {...others} />);
}

export default Component;
