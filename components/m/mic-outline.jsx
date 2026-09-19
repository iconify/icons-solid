import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq_3n607q.css';
import '../../css/n/nblq3cbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bq_3n607q"/><path class="nblq3cbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:mic-outline"} {...others} />);
}

export default Component;
