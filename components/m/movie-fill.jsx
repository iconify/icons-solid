import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o90fnvbiu.css';
import '../../css/q/qy0a994nu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o90fnvbiu"/><path class="qy0a994nu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:movie-fill"} {...others} />);
}

export default Component;
