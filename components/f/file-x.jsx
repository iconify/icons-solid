import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj3cfcodp.css';
import '../../css/z/z132mnbgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rj3cfcodp"/><path class="z132mnbgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-x"} {...others} />);
}

export default Component;
