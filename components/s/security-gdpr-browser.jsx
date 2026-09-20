import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkm2jfh8m.css';
import '../../css/j/j2a76tb0l.css';
import '../../css/z/zurq1_b3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bkm2jfh8m"/><path class="j2a76tb0l"/><path class="zurq1_b3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:security-gdpr-browser"} {...others} />);
}

export default Component;
