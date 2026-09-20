import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukyfr_b1f.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ukyfr_b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:signage-3-remix"} {...others} />);
}

export default Component;
