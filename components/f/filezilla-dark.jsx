import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur72ib6mp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ur72ib6mp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:filezilla-dark"} {...others} />);
}

export default Component;
