import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g32-skbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g32-skbvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:natural-disaster-flood-bold"} {...others} />);
}

export default Component;
