import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i38todi1o.css';
import '../../css/x/xv802vxka.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i38todi1o"/><path class="xv802vxka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:table-delete"} {...others} />);
}

export default Component;
