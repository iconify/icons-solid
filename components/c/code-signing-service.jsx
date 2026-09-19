import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo26xfwgu.css';
import '../../css/r/rokywmbwd.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="xo26xfwgu"/><path class="rokywmbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:code-signing-service"} {...others} />);
}

export default Component;
