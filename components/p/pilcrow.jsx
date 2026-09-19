import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pafx6bbdw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pafx6bbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:pilcrow"} {...others} />);
}

export default Component;
