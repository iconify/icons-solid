import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv1e92boa.css';
import '../../css/r/rtvgfzeze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bv1e92boa"/><path class="rtvgfzeze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:route"} {...others} />);
}

export default Component;
