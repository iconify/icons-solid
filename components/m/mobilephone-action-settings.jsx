import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b0i86-b3x.css';
import '../../css/i/izcczcqzd.css';
import '../../css/a/a4tz-rb9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b0i86-b3x"/><path class="izcczcqzd"/><path class="a4tz-rb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:mobilephone-action-settings"} {...others} />);
}

export default Component;
