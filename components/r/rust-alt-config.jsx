import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnh7u9f3r.css';
import '../../css/v/v_9terb5z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gnh7u9f3r"/><path class="v_9terb5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:rust-alt-config"} {...others} />);
}

export default Component;
