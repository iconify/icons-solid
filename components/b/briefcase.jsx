import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-ylrjucc.css';
import '../../css/s/slghhtbkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="u-ylrjucc"/><path class="slghhtbkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:briefcase"} {...others} />);
}

export default Component;
