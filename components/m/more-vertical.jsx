import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/t/tatgggbkl.css';
import '../../css/j/jxl67pbry.css';
import '../../css/z/z5gbzwbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle transform="rotate(90 12 4)" class="tatgggbkl"/><circle transform="rotate(90 12 12)" class="jxl67pbry"/><circle transform="rotate(90 12 20)" class="z5gbzwbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:more-vertical"} {...others} />);
}

export default Component;
