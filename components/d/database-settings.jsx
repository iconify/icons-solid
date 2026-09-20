import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o6ofitb4u.css';
import '../../css/i/iugebqb7g.css';
import '../../css/i/ivw0slbcd.css';
import '../../css/y/yarof0bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o6ofitb4u"/><path class="iugebqb7g"/><path clip-rule="evenodd" class="ivw0slbcd"/><path clip-rule="evenodd" class="yarof0bzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:database-settings"} {...others} />);
}

export default Component;
