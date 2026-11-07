import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhj7tk-5q.css';
import '../../css/c/cvj_c0b3m.css';
import '../../css/n/nqjdsphxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhj7tk-5q"/><path class="cvj_c0b3m"/><path class="nqjdsphxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-corrupted-bold"} {...others} />);
}

export default Component;
