import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5yy7fx-i.css';
import '../../css/p/puf8leb7o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j5yy7fx-i"/><path class="puf8leb7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:opentofu"} {...others} />);
}

export default Component;
