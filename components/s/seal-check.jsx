import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6-_lmbbc.css';
import '../../css/x/xvqdfg4fc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p6-_lmbbc"/><path class="xvqdfg4fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:seal-check"} {...others} />);
}

export default Component;
