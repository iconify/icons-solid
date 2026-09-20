import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/n/nov9iu.css';
import '../../css/q/qqamjf.css';
import '../../css/s/suwabu.css';
import '../../css/k/k-a29e.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c nov9iu"/><path class="a0m25c qqamjf"/><path class="a0m25c suwabu"/><path class="a0m25c k-a29e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:menu-fold-left"} {...others} />);
}

export default Component;
