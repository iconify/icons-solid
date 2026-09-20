import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9haurhgf.css';
import '../../css/p/pkyr6wbwh.css';
import '../../css/x/x5ql1ib_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z9haurhgf"/><path class="pkyr6wbwh"/><path class="x5ql1ib_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:klv"} {...others} />);
}

export default Component;
