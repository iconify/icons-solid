import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj-378b7y.css';
import '../../css/n/nblq3cbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tj-378b7y"/><path class="nblq3cbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:mic-fill"} {...others} />);
}

export default Component;
