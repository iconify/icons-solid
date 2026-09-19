import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f87i2j8hs.css';
import '../../css/b/bo_tdpbvg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f87i2j8hs"/><circle class="bo_tdpbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:moonrepo"} {...others} />);
}

export default Component;
