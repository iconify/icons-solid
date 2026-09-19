import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwdwrlbgn.css';
import '../../css/y/ybnwjcooy.css';
import '../../css/f/fg0e7sbfc.css';
import '../../css/y/yaqh7szcu.css';
import '../../css/z/z7oqtpbjj.css';
import '../../css/o/ofts92-xf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xwdwrlbgn"/><path class="ybnwjcooy"/><path class="fg0e7sbfc"/><path class="yaqh7szcu"/><path class="z7oqtpbjj"/><path class="ofts92-xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:alembic"} {...others} />);
}

export default Component;
