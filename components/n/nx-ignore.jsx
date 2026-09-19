import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixmy2_bju.css';
import '../../css/a/al6kmgb1k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ixmy2_bju"/><path class="al6kmgb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:nx-ignore"} {...others} />);
}

export default Component;
