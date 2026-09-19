import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aps6ewwol.css';
import '../../css/d/dno86xatc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aps6ewwol"/><path class="dno86xatc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:eye-big"} {...others} />);
}

export default Component;
