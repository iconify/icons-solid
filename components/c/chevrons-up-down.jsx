import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfs3-mmpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qfs3-mmpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:chevrons-up-down"} {...others} />);
}

export default Component;
