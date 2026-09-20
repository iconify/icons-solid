import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/e/expip9fte.css';
import '../../css/p/pa8jyrgwl.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGyM5SwbuL"><g class="ukm9jj2re"><circle class="expip9fte"/><path class="pa8jyrgwl"/></g></mask></defs><path mask="url(#SVGyM5SwbuL)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:view-duotone-line"} {...others} />);
}

export default Component;
