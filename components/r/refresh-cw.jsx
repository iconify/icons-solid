import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w38dn7b9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w38dn7b9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:refresh-cw"} {...others} />);
}

export default Component;
