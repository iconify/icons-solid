import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfox8-bar.css';
import '../../css/u/un5jckbse.css';
import '../../css/b/b7n721b8t.css';
import '../../css/f/fiy96k6cj.css';
import '../../css/j/jci9u7h5i.css';
import '../../css/b/bpda-euws.css';
import '../../css/o/ogjorabyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jfox8-bar"/><path class="un5jckbse"/><path class="b7n721b8t"/><path class="fiy96k6cj"/><path class="jci9u7h5i"/><path class="bpda-euws"/><path class="ogjorabyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:delivery-truck-5"} {...others} />);
}

export default Component;
