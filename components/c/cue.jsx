import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0q8216sb.css';
import '../../css/u/uf53occ4u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k0q8216sb"/><circle class="uf53occ4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:cue"} {...others} />);
}

export default Component;
