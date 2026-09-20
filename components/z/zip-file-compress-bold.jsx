import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx9a00_2h.css';
import '../../css/d/drkyq1beg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zx9a00_2h"/><path class="drkyq1beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:zip-file-compress-bold"} {...others} />);
}

export default Component;
