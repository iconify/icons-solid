import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a98mxbbmr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a98mxbbmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hashicorp-nomad-light"} {...others} />);
}

export default Component;
