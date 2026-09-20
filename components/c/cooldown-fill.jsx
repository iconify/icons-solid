import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kamhrtb5g.css';
import '../../css/l/l9ok9ouey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kamhrtb5g"/><path class="l9ok9ouey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cooldown-fill"} {...others} />);
}

export default Component;
