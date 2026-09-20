import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tj6aivbzl.css';
import '../../css/l/lfr1rf0jq.css';
import '../../css/k/kmapvxbct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><ellipse class="tj6aivbzl"/><path class="lfr1rf0jq"/><path class="kmapvxbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:database"} {...others} />);
}

export default Component;
