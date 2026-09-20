import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7nf2wbln.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k7nf2wbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:smt"} {...others} />);
}

export default Component;
