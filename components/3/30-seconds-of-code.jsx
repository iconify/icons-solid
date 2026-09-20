import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqs0lyb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uqs0lyb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:30-seconds-of-code"} {...others} />);
}

export default Component;
