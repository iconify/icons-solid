import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmj2u9wvy.css';
import '../../css/e/e729k1bor.css';
import '../../css/e/e7k_nubxd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hmj2u9wvy"/><path class="e729k1bor"/><path class="e7k_nubxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:columns"} {...others} />);
}

export default Component;
