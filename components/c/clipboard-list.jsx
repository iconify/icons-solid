import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb00oo3bp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lb00oo3bp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clipboard-list"} {...others} />);
}

export default Component;
