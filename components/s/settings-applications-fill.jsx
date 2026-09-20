import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgcif9d1i.css';
import '../../css/g/gkg9z-_hv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgcif9d1i"/><path clip-rule="evenodd" class="gkg9z-_hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:settings-applications-fill"} {...others} />);
}

export default Component;
