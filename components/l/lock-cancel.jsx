import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wwteh2bzj.css';
import '../../css/f/f7rllnbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wwteh2bzj"/><path class="f7rllnbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-cancel"} {...others} />);
}

export default Component;
