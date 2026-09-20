import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2y6teb_s.css';
import '../../css/t/tyddiab8w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j2y6teb_s"/><path class="tyddiab8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:school-science-test-flask"} {...others} />);
}

export default Component;
