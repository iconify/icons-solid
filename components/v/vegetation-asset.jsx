import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glles2bcn.css';
import '../../css/a/aeily0buk.css';
import '../../css/f/f3_ob3l1l.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="glles2bcn"/><path class="aeily0buk"/><path class="f3_ob3l1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:vegetation-asset"} {...others} />);
}

export default Component;
