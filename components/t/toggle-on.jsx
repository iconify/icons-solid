import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ndoug0ixa.css';
import '../../css/b/byu9zgdxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="ndoug0ixa"/><circle class="byu9zgdxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:toggle-on"} {...others} />);
}

export default Component;
