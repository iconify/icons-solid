import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e42jsrbou.css';
import '../../css/n/nv2zrkb9a.css';
import '../../css/v/v3ao27dlm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e42jsrbou"/><path class="nv2zrkb9a"/><path class="v3ao27dlm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-blessed"} {...others} />);
}

export default Component;
