import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-bib9iuo.css';
import '../../css/u/u2_or7bit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-bib9iuo"/><path clip-rule="evenodd" class="u2_or7bit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:tab"} {...others} />);
}

export default Component;
