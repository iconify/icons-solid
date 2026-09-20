import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ad2k74bfu.css';
import '../../css/g/gh-igyr-n.css';
import '../../css/f/f3wvhbb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="ad2k74bfu"/><path class="gh-igyr-n"/><path clip-rule="evenodd" class="f3wvhbb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-search-fill"} {...others} />);
}

export default Component;
