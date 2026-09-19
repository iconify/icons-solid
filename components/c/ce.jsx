import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/f_zukwb7p.css';
import '../../css/i/iitlfdb5a.css';
import '../../css/x/xxddg2bhe.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsCe0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsCe0)"><path class="f_zukwb7p"/><path class="iitlfdb5a"/><path class="xxddg2bhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ce"} {...others} />);
}

export default Component;
