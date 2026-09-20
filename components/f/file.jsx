import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrt3w773d.css';

const viewBox = {"width":24,"height":24};
const content = `<path vector-effect="non-scaling-stroke" class="zrt3w773d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:file"} {...others} />);
}

export default Component;
