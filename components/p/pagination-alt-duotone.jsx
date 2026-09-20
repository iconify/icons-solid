import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnacpw3wj.css';
import '../../css/n/n4kggwbad.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rnacpw3wj"/><rect class="n4kggwbad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pagination-alt-duotone"} {...others} />);
}

export default Component;
