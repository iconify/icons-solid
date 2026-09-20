import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ht1jw1baz.css';
import '../../css/m/mt7-dnx6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ht1jw1baz"/><path class="mt7-dnx6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:barell"} {...others} />);
}

export default Component;
