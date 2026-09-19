import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1crshb5u.css';
import '../../css/s/sihn2yb6f.css';
import '../../css/h/hk3z8gb_h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h1crshb5u"/><circle class="sihn2yb6f"/><circle class="hk3z8gb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:root-open"} {...others} />);
}

export default Component;
