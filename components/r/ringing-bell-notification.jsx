import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/bjeqacbbu.css';
import '../../css/f/ffemkhx2c.css';
import '../../css/y/y917phz2u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="bjeqacbbu"/><path class="ffemkhx2c"/><path class="y917phz2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ringing-bell-notification"} {...others} />);
}

export default Component;
