import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ghya2pbow.css';
import '../../css/r/rg-bdgbti.css';
import '../../css/c/ceitnjb9j.css';
import '../../css/f/fv6g2tb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="ghya2pbow"/><path class="rg-bdgbti"/><circle class="ceitnjb9j"/><path class="fv6g2tb8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-search"} {...others} />);
}

export default Component;
