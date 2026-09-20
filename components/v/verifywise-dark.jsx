import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak0q_ccse.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ak0q_ccse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:verifywise-dark"} {...others} />);
}

export default Component;
