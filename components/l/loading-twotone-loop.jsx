import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/d/dza1eb.css';
import '../../css/z/z9_d1p.css';
import '../../css/s/so-from-18.css';
import '../../css/t/tr-2c6-rw.css';
import '../../css/s/so-from-60.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c dza1eb"/><path class="a0m25c z9_d1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:loading-twotone-loop"} {...others} />);
}

export default Component;
