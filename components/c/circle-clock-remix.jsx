import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sch0qpd4z.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="sch0qpd4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:circle-clock-remix"} {...others} />);
}

export default Component;
