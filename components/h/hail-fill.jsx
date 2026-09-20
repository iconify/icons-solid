import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6ovqkmll.css';
import '../../css/b/bi7kcybaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6ovqkmll"/><path class="bi7kcybaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hail-fill"} {...others} />);
}

export default Component;
