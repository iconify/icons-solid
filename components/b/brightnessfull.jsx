import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbzh3mn8p.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jbzh3mn8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:brightnessfull"} {...others} />);
}

export default Component;
