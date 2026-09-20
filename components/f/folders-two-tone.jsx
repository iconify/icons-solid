import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jwx1rsb9w.css';
import '../../css/a/abq3ht95i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jwx1rsb9w"/><path class="abq3ht95i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folders-two-tone"} {...others} />);
}

export default Component;
