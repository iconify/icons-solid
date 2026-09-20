import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftl1fs6jj.css';
import '../../css/f/fv1vecnlt.css';
import '../../css/f/flan3pe2x.css';
import '../../css/a/ak5u0_npi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ftl1fs6jj"/><path class="fv1vecnlt"/><path clip-rule="evenodd" class="flan3pe2x"/><path clip-rule="evenodd" class="ak5u0_npi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:iammeter-dark"} {...others} />);
}

export default Component;
