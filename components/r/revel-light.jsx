import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk8an_ymz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hk8an_ymz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:revel-light"} {...others} />);
}

export default Component;
