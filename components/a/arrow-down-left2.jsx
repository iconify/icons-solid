import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh4mmaclw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jh4mmaclw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:arrow-down-left2"} {...others} />);
}

export default Component;
