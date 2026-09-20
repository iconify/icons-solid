import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arlrzbbsj.css';
import '../../css/r/rkc5kdsmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="arlrzbbsj"/><path class="rkc5kdsmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:navigation-arrows-left-1-bold"} {...others} />);
}

export default Component;
