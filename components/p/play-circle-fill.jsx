import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9b945bdq.css';
import '../../css/n/n3pztie1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c9b945bdq"/><path class="n3pztie1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:play-circle-fill"} {...others} />);
}

export default Component;
