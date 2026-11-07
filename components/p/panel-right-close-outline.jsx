import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vom0lbury.css';
import '../../css/z/zueniel6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vom0lbury"/><path clip-rule="evenodd" class="zueniel6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-right-close-outline"} {...others} />);
}

export default Component;
