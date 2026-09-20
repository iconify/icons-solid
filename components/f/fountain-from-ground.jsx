import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dffe5p_ib.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dffe5p_ib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:fountain-from-ground"} {...others} />);
}

export default Component;
