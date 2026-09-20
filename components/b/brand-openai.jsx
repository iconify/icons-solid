import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ou3dncbcc.css';
import '../../css/o/o4oa87bts.css';
import '../../css/q/q7zk0il4z.css';
import '../../css/c/cv-q4dbhx.css';
import '../../css/a/ar9nyzj-q.css';
import '../../css/b/b8_pm-bog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ou3dncbcc"/><path class="o4oa87bts"/><path class="q7zk0il4z"/><path class="cv-q4dbhx"/><path class="ar9nyzj-q"/><path class="b8_pm-bog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-openai"} {...others} />);
}

export default Component;
