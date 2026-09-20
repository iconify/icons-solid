import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdh4pbbmp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdh4pbbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:number-95-small"} {...others} />);
}

export default Component;
