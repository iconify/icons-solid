import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv6br_-mv.css';
import '../../css/c/ca-rzg1lt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dv6br_-mv"/><path class="ca-rzg1lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:bank-outline"} {...others} />);
}

export default Component;
