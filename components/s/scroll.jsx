import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_7x--shm.css';
import '../../css/l/luq2o7biq.css';
import '../../css/l/l13e8s3zd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_7x--shm"/><path class="luq2o7biq"/><path class="l13e8s3zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:scroll"} {...others} />);
}

export default Component;
