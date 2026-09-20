import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0509qe2b.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="u0509qe2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:browser-build-remix"} {...others} />);
}

export default Component;
