import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gzebc02qz.css';
import '../../css/m/mqmhdxbks.css';
import '../../css/o/o28d6jajk.css';
import '../../css/e/evln3mbbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gzebc02qz"/><path class="mqmhdxbks"/><path class="o28d6jajk"/><path class="evln3mbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:connector-1"} {...others} />);
}

export default Component;
