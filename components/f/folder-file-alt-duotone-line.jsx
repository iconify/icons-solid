import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vlfydfsvz.css';
import '../../css/e/ebt4li8wi.css';
import '../../css/i/iazxeobtk.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGXjkvuc6g"><g class="ft5dv1b6b"><path class="vlfydfsvz"/><path class="ebt4li8wi"/><path class="iazxeobtk"/></g></mask></defs><path mask="url(#SVGXjkvuc6g)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-file-alt-duotone-line"} {...others} />);
}

export default Component;
