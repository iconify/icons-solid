import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpc-7dbiw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpc-7dbiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shape-cube"} {...others} />);
}

export default Component;
