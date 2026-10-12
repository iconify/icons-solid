import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/euxpybc-u.css';
import '../../css/z/zcl772bhd.css';
import '../../css/y/yr_f-qwns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="euxpybc-u"/><path class="zcl772bhd"/><path class="yr_f-qwns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-pull-request-draft-duotone"} {...others} />);
}

export default Component;
