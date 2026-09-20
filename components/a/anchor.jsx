import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex2-leshc.css';
import '../../css/k/kg2uyccfb.css';
import '../../css/y/y1nytpm2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ex2-leshc"/><path class="kg2uyccfb"/><path class="y1nytpm2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:anchor"} {...others} />);
}

export default Component;
