import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au98x5bva.css';
import '../../css/t/toacpk17o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="au98x5bva"/><path class="toacpk17o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:archive"} {...others} />);
}

export default Component;
