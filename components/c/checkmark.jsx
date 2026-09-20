import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un0prhb_g.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="un0prhb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:checkmark"} {...others} />);
}

export default Component;
