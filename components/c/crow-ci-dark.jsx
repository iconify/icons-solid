import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7yjv0aal.css';
import '../../css/g/g--_bbc2c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y7yjv0aal"/><path class="g--_bbc2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crow-ci-dark"} {...others} />);
}

export default Component;
