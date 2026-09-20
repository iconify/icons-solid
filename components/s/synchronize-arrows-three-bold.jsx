import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-gr9vbzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-gr9vbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:synchronize-arrows-three-bold"} {...others} />);
}

export default Component;
