import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfn5b-eoc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bfn5b-eoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:javascript"} {...others} />);
}

export default Component;
