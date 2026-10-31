import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oncbk1b8w.css';
import '../../css/f/fcr8reb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oncbk1b8w"/><path class="fcr8reb_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:passport-duocolor-round"} {...others} />);
}

export default Component;
