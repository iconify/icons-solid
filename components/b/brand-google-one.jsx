import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fbvhdob4u.css';
import '../../css/w/wogwu_b4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fbvhdob4u"/><path class="wogwu_b4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-google-one"} {...others} />);
}

export default Component;
