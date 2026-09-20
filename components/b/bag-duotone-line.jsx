import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6xsmtrch.css';
import '../../css/d/dhs8qrwgp.css';
import '../../css/t/t-ux4n71u.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGvUPw8b1c"><g class="ft5dv1b6b"><path class="x6xsmtrch"/><path class="dhs8qrwgp"/><path class="t-ux4n71u"/></g></mask></defs><path mask="url(#SVGvUPw8b1c)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bag-duotone-line"} {...others} />);
}

export default Component;
