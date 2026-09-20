import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/f/fazk6vbkp.css';
import '../../css/a/almsit-4x.css';
import '../../css/y/y813v9jyr.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGlfZzvdqN" width="18" height="21" x="3" y="1" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="fazk6vbkp"/><path class="almsit-4x"/></mask><path mask="url(#SVGlfZzvdqN)" class="y813v9jyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chield"} {...others} />);
}

export default Component;
