import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6mivl14w.css';
import '../../css/o/ohpjererv.css';
import '../../css/k/kyfoklson.css';
import '../../css/c/cgny7ubsw.css';
import '../../css/a/a6ogh7bzp.css';
import '../../css/w/w_czame4b.css';
import '../../css/a/apeq0wbqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow z6mivl14w"/><path class="ohpjererv"/><path class="kyfoklson"/><path class="cgny7ubsw"/><path class="a6ogh7bzp"/><path class="w_czame4b wm-shine"/><path class="apeq0wbqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:heart"} {...others} />);
}

export default Component;
