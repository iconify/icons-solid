import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj32hac5p.css';
import '../../css/b/bdvnvrbgq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oj32hac5p"/><path class="bdvnvrbgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ubsn"} {...others} />);
}

export default Component;
