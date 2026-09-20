import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kluqwjbel.css';
import '../../css/a/apsnu1tbt.css';
import '../../css/h/hhkboebip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kluqwjbel"/><path class="apsnu1tbt"/><path class="hhkboebip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clock-arrow-left"} {...others} />);
}

export default Component;
