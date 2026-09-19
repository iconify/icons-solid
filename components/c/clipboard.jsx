import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj9cwm6hq.css';
import '../../css/d/d66d9mkgz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cj9cwm6hq"/><path class="d66d9mkgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:clipboard"} {...others} />);
}

export default Component;
