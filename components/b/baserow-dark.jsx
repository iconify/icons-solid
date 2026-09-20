import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ektnvzbys.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ektnvzbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:baserow-dark"} {...others} />);
}

export default Component;
