import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgazdabtx.css';
import '../../css/w/w4qmzgbaj.css';
import '../../css/g/gkmoivbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fgazdabtx"/><path clip-rule="evenodd" class="w4qmzgbaj"/><path class="gkmoivbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:play-list-8-flat"} {...others} />);
}

export default Component;
