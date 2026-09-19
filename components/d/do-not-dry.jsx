import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cua6mti1r.css';

const viewBox = {"width":520,"height":512};
const content = `<path class="cua6mti1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:do-not-dry"} {...others} />);
}

export default Component;
