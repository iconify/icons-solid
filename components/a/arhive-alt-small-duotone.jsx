import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye6tf12-p.css';
import '../../css/o/o84l7ebqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ye6tf12-p"/><path class="o84l7ebqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-small-duotone"} {...others} />);
}

export default Component;
