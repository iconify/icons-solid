import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/o6egmgbkk.css';
import '../../css/i/i94hfmkng.css';
import '../../css/b/ba7ufw_db.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="o6egmgbkk"/><path class="i94hfmkng"/><path class="ba7ufw_db"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:insert-column"} {...others} />);
}

export default Component;
